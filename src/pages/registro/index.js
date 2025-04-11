import { useState } from 'react';
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
import { Picker } from '@react-native-picker/picker';

export default function Registro() {
  const navigation = useNavigation();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [endereco, setEndereco] = useState('');

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validarSenha = (senha) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return regex.test(senha);
  }
  const registrar = async () => {
    if (!usuario || !senha || !confirmarSenha || !nome || !email || !endereco) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    if (!validarEmail(email)) {
      Alert.alert('Erro', 'Formato de e-mail inválido.');
      return;
    }
    if (!validarSenha(senha)) {
      Alert.alert('Erro', 'Formato de senha inválido.');
      return;
    }
    try {
      const caminho = FileSystem.documentDirectory + 'usuarios.json';

      let usuarios = {};
      const existe = await FileSystem.getInfoAsync(caminho);

      if (existe.exists) {
        const conteudo = await FileSystem.readAsStringAsync(caminho);
        usuarios = JSON.parse(conteudo);
      }

      const usuarioExiste = Object.values(usuarios).some(
        (user) => user.usuario === usuario
      );

      if (usuarioExiste) {
        Alert.alert('Erro', 'Usuário já existe. Escolha outro nome.');
        return;
      }

      const novoId = (Object.keys(usuarios).length + 1).toString();

      usuarios[novoId] = {
        usuario,
        senha,
        nome,
        email,
        sexo,
        endereco,
      };

      await FileSystem.writeAsStringAsync(
        caminho,
        JSON.stringify(usuarios, null, 2)
      );

      Alert.alert('Sucesso', 'Usuário registrado com sucesso!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (erro) {
      console.error('Erro ao registrar usuário:', erro);
      Alert.alert('Erro', 'Falha ao registrar usuário.');
    }
  };

  return (
    <View style={styles.borda}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.label}>Usuário:</Text>
        <TextInput
          style={styles.input}
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
          placeholder="Digite seu usuário"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          autoCapitalize="none"
          secureTextEntry
          placeholder="Digite sua senha"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>Confirmar Senha:</Text>
        <TextInput
          style={styles.input}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          autoCapitalize="none"
          secureTextEntry
          placeholder="Confirme sua senha"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholder="exemplo@email.com"
          keyboardType="email-address"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>Sexo:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={sexo}
            onValueChange={(itemValue) => setSexo(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
          </Picker>
        </View>

        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={styles.input}
          value={endereco}
          onChangeText={setEndereco}
          placeholder="Digite seu endereço"
          placeholderTextColor="#888"
        />

        <Pressable style={styles.botao} onPress={registrar}>
          <Text style={styles.txtBotao}>Registrar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
