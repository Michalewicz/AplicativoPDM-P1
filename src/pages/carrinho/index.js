import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  Pressable,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/navbar';
import BottonBar from '../../components/botton_bar';
import dadosCarrinho from '../../fakeBD/dados_carrinho.json';
import produtos from '../../fakeBD/produtos.json';
import { styles } from './styles';
import CarProduto from '../../components/car_produto';
import { Feather } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import { usuarioLogado } from '../login/index';
import Slider from '@react-native-community/slider';

export default function Carrinho() {
  const navigation = useNavigation();
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const caminho = FileSystem.documentDirectory + 'dados_carrinho.json';
  const [modalVisible, setModalVisible] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [quantidadeMaxima, setQuantidadeMaxima] = useState(1);
  const [quantidadeParaRemover, setQuantidadeParaRemover] = useState('1');

  useEffect(() => {
    const carregarCarrinho = async () => {
      try {
        const existe = await FileSystem.getInfoAsync(caminho);
        if (existe.exists) {
          const conteudo = await FileSystem.readAsStringAsync(caminho);
          const json = JSON.parse(conteudo);
          setItensCarrinho(json.itens || []);
        } else {
          await FileSystem.writeAsStringAsync(
            caminho,
            JSON.stringify(dadosCarrinho, null, 2)
          );
          setItensCarrinho(dadosCarrinho.itens);
        }
      } catch (error) {
        console.error('Erro ao carregar carrinho:', error);
        setItensCarrinho(dadosCarrinho.itens);
      } finally {
        setIsLoading(false);
      }
    };

    carregarCarrinho();
  }, [caminho]);

  const contador = {};
  for (const item of itensCarrinho) {
    contador[item.nome] = (contador[item.nome] || 0) + 1;
  }

  const nomesUnicos = [...new Set(itensCarrinho.map((item) => item.nome))];

  const totalCompra = nomesUnicos.reduce((total, nome) => {
    const produto = Object.values(produtos).find((p) => p.nome === nome);
    const quantidade = contador[nome];
    if (!produto) return total;
    const preco = parseFloat(produto.preco.replace(',', '.'));
    return total + preco * quantidade;
  }, 0);

  const salvarDadosCarrinho = async (novoCarrinho) => {
    await FileSystem.writeAsStringAsync(
      caminho,
      JSON.stringify({ itens: novoCarrinho }, null, 2)
    );
  };

  const removerItens = async (nome, quantidadeParaRemover) => {
    let novaLista = [...itensCarrinho];
    let removidos = 0;
    novaLista = novaLista.filter((item) => {
      if (item.nome === nome && removidos < quantidadeParaRemover) {
        removidos++;
        return false;
      }
      return true;
    });
    setItensCarrinho(novaLista);
    await salvarDadosCarrinho(novaLista);
  };

  const handleRemover = (nome, quantidade) => {
    if (quantidade === 1) {
      Alert.alert('Remover item', `Deseja remover "${nome}" do carrinho?`, [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim',
          style: 'destructive',
          onPress: () => removerItens(nome, 1),
        },
      ]);
    } else {
      setProdutoSelecionado(nome);
      setQuantidadeMaxima(quantidade);
      setQuantidadeParaRemover('1');
      setModalVisible(true);
    }
  };

  if (isLoading) {
    return (
      <View style={[styles.containerPrincipal, styles.carregandoContainer]}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando carrinho...</Text>
      </View>
    );
  }

  return (
    <View style={styles.containerPrincipal}>
      <Navbar />

      {modalVisible && (
        <View style={styles.overlayModal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitulo}>Remover unidades</Text>
            <Text style={styles.modalTexto}>
              Quantas unidades deseja remover de "{produtoSelecionado}"? (1 a{' '}
              {quantidadeMaxima})
            </Text>

            <Text style={styles.valorSlider}>
              {quantidadeParaRemover} unidade(s)
            </Text>

            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={1}
              maximumValue={quantidadeMaxima}
              step={1}
              value={parseInt(quantidadeParaRemover)}
              minimumTrackTintColor="#FF0000"
              maximumTrackTintColor="#000000"
              thumbTintColor="#FF0000"
              onSlidingComplete={(value) =>
                setQuantidadeParaRemover(value.toString())
              }
            />

            <View style={styles.botoesModal}>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.botaoCancelar}>
                <Text style={styles.textoCancelar}>Cancelar</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  const qtd = Math.min(
                    Math.max(parseInt(quantidadeParaRemover), 1),
                    quantidadeMaxima
                  );
                  Alert.alert(
                    'Confirmar remoção',
                    `Deseja remover ${qtd} unidade(s) de "${produtoSelecionado}" do carrinho?`,
                    [
                      { text: 'Não', style: 'cancel' },
                      {
                        text: 'Sim',
                        style: 'destructive',
                        onPress: () => {
                          removerItens(produtoSelecionado, qtd);
                          setModalVisible(false);
                        },
                      },
                    ]
                  );
                }}>
                <Text style={styles.textoRemover}>Remover</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}

      <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
        {nomesUnicos.length === 0 ? (
          <Text style={{ textAlign: 'center', marginTop: 30, fontSize:30 }}>
            Seu carrinho está vazio 😕
          </Text>
        ) : (
          nomesUnicos.map((nome, index) => {
            const produto = Object.values(produtos).find(
              (p) => p.nome === nome
            );
            if (!produto) return null;

            const quantidade = contador[nome];
            const precoTotal = (
              parseFloat(produto.preco.replace(',', '.')) * quantidade
            )
              .toFixed(2)
              .replace('.', ',');

            return (
              <CarProduto
                key={index}
                nome={nome}
                preco={precoTotal}
                quantidade={quantidade}
                imagemPath={produto.imagem}
                botaoRemover={
                  <TouchableOpacity
                    onPress={() => handleRemover(nome, quantidade)}>
                    <Feather name="trash-2" size={36} color="red" />
                  </TouchableOpacity>
                }
              />
            );
          })
        )}
      </ScrollView>
      <View style={styles.rodape}>
        <Text style={styles.totalTexto}>
          Total: R$ {totalCompra.toFixed(2).replace('.', ',')}
        </Text>
        <Pressable
          style={[
            styles.botaoFinalizar,
            itensCarrinho.length === 0 && styles.botaoDesativado,
          ]}
          onPress={() => {
            if (!usuarioLogado) {
              Alert.alert(
                'Atenção',
                'Você precisa estar logado para finalizar a compra.'
              );
              navigation.navigate('Login');
            } else {
              Alert.alert('Forma de Pagamento', 'Selecione o pagamento:', [
                {
                  text: 'Pix',
                  onPress: () => navigation.navigate('Pagamento'),
                },
                { text: 'Cancelar' },
              ]);
            }
          }}
          disabled={itensCarrinho.length === 0}>
          <Text style={styles.textoBotao}>Finalizar compra</Text>
        </Pressable>
      </View>
      <BottonBar navigationNavbar={navigation} usuarioLogado={usuarioLogado} />
    </View>
  );
}
