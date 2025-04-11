import { useState } from 'react';
import {View,ScrollView,Text,TextInput,Pressable,Alert,} from 'react-native';
import Navbar from '../../components/navbar';
import { styles } from './styles';
import usuarios from '../../fakeBD/usuarios.json';
import { useNavigation } from '@react-navigation/native';

export let usuarioLogado = null; // será preenchido após login

export default function Login() {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const autenticar = () => {
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
  };

  return (
    <View style={styles.borda}>
      <Navbar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>
        <View style={styles.scroll}>
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
            <Pressable style={styles.botao}>
              <Text style={styles.txtBotao}>Registrar</Text>
            </Pressable>
            <Pressable style={styles.botao} onPress={autenticar}>
              <Text style={styles.txtBotao}>Entrar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
