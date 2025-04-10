import React, { useState, useEffect } from 'react';
import { View, TextInput, ScrollView, Text, Pressable, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/navbar/index';
import dadosCarrinho from '../../fakeBD/dados_carrinho.json';
import produtos from '../../fakeBD/produtos.json';
import { styles } from './styles';
import CarProduto from '../../components/car_produto/index';
import { Feather } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';


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
          await FileSystem.writeAsStringAsync(caminho, JSON.stringify(dadosCarrinho, null, 2));
          setItensCarrinho(dadosCarrinho.itens);
        }
      } catch (error) {
        console.error('Erro ao carregar carrinho:', error);
        setItensCarrinho(dadosCarrinho.itens); // fallback
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

  const nomesUnicos = [...new Set(itensCarrinho.map(item => item.nome))];

  const totalCompra = nomesUnicos.reduce((total, nome) => {
    const produto = Object.values(produtos).find(p => p.nome === nome);
    const quantidade = contador[nome];
    if (!produto) return total;
    const preco = parseFloat(produto.preco.replace(',', '.'));
    return total + preco * quantidade;
  }, 0);

  const salvarDadosCarrinho = async (novoCarrinho) => {
    await FileSystem.writeAsStringAsync(caminho, JSON.stringify({ itens: novoCarrinho }, null, 2));
  };

  const removerItens = async (nome, quantidadeParaRemover) => {
    let novaLista = [...itensCarrinho];
    let removidos = 0;
    novaLista = novaLista.filter(item => {
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
      Alert.alert(
        'Remover item',
        `Deseja remover "${nome}" do carrinho?`,
        [
          { text: 'Não', style: 'cancel' },
          {
            text: 'Sim',
            style: 'destructive',
            onPress: () => removerItens(nome, 1)
          }
        ]
      );
    } else {
      setProdutoSelecionado(nome);
      setQuantidadeMaxima(quantidade);
      setQuantidadeParaRemover('1');
      setModalVisible(true);

    }
  };

  if (isLoading) {
    return (
      <View style={[styles.containerPrincipal, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando carrinho...</Text>
      </View>
    );
  }

  return (
    <View style={styles.containerPrincipal}>
      <Navbar />
      
      {modalVisible && (
        <View style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999
        }}>
          <View style={{
            width: '80%',
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 10,
            elevation: 5
          }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
              Remover unidades
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Quantas unidades deseja remover de "{produtoSelecionado}"? (1 a {quantidadeMaxima})
            </Text>

            <TextInput
              keyboardType="number-pad"
              value={quantidadeParaRemover}
              onChangeText={setQuantidadeParaRemover}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                padding: 10,
                marginBottom: 15
              }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Pressable onPress={() => setModalVisible(false)} style={{ marginRight: 15 }}>
                <Text style={{ color: 'blue' }}>Cancelar</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  const qtd = Math.min(Math.max(parseInt(quantidadeParaRemover), 1), quantidadeMaxima);
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
                        }
                      }
                    ]
                  );
                }}
              >
                <Text style={{ color: 'red' }}>Remover</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}

      <ScrollView style={styles.container}>
        {nomesUnicos.map((nome, index) => {
          const produto = Object.values(produtos).find(p => p.nome === nome);
          if (!produto) return null;

          const quantidade = contador[nome];
          const precoTotal = (parseFloat(produto.preco.replace(',', '.')) * quantidade)
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
                <TouchableOpacity onPress={() => handleRemover(nome, quantidade)}>
                  <Feather name="trash-2" size={36} color="red" />
                </TouchableOpacity>
              }
            />
          );
        })}
      </ScrollView>

      <View style={styles.rodape}>
        <Text style={styles.totalTexto}>
          Total: R$ {totalCompra.toFixed(2).replace('.', ',')}
        </Text>
        <Pressable style={styles.botaoFinalizar} onPress={() => navigation.navigate('Pagamento')}>
          <Text style={styles.textoBotao}>Finaliza Compra</Text>
        </Pressable>
      </View>
    </View>
  );
}