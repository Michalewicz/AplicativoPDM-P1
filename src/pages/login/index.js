import { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import Navbar from '../../components/navbar';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';

// Carregando os dados padrão
import usuariosIniciais from '../../fakeBD/usuarios.json';

export let usuarioLogado = null;
export function desconectarUsuario() {
  usuarioLogado = null;
}

export default function Login() {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const caminho = FileSystem.documentDirectory + 'usuarios.json';
    const inicializarUsuarios = async () => {
      try {
        const existe = await FileSystem.getInfoAsync(caminho);
        if (!existe.exists) {
          await FileSystem.writeAsStringAsync(
            caminho,
            JSON.stringify(usuariosIniciais, null, 2)
          );
          console.log('usuarios.json inicializado com dados padrão.');
        }
      } catch (err) {
        console.error('Erro ao inicializar usuarios.json:', err);
      }
    };
    inicializarUsuarios();
  }, []);

  const autenticar = async () => {
    try {
      const existe = await FileSystem.getInfoAsync(caminho);
      if (!existe.exists) {
        Alert.alert('Erro', 'Base de usuários não encontrada.');
        return;
      }

      const conteudo = await FileSystem.readAsStringAsync(caminho);
      const usuarios = JSON.parse(conteudo);

      const usuarioEncontrado = Object.values(usuarios).find(
        (user) => user.usuario === login && user.senha === senha
      );

      if (usuarioEncontrado) {
        usuarioLogado = usuarioEncontrado;
        Alert.alert('Sucesso', `Bem vindo ${usuarioEncontrado.nome}!`, [
          { text: 'OK', onPress: () => navigation.navigate('Home') },
        ]);
      } else {
        Alert.alert('Erro', 'Usuário e/ou senha incorreto(s)');
      }
    } catch (erro) {
      console.error('Erro ao autenticar usuário:', erro);
      Alert.alert('Erro', 'Erro ao autenticar usuário.');
    }
  };

  return (
    <View style={styles.borda}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.label}>Login:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={login}
          onChangeText={setLogin}
          placeholder="Digite seu login"
          placeholderTextColor="#888"
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <View style={styles.botoesContainer}>
          <Pressable style={styles.botao} onPress={autenticar}>
            <Text style={styles.txtBotao}>Entrar</Text>
          </Pressable>
          <Pressable
            style={styles.botao}
            onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.txtBotao}>Registrar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
