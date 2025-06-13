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
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [numero, setNumero] = useState('');
  const [endereco, setEndereco] = useState('');

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validarSenha = (senha) =>''
  const validarCep = (cep) => /^\d{8}$/.test(cep);

  const buscarEndereco = async () => {
    if (!validarCep(cep)) {
      Alert.alert('Erro', 'Digite um CEP válido com 8 dígitos.');
      return;
    }
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        Alert.alert('Erro', 'CEP não encontrado.');
        return;
      }

      setRua(data.logradouro || '');
      setBairro(data.bairro || '');
      setCidade(data.localidade || '');
      setComplemento(data.complemento || '');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao buscar o CEP.');
      console.error(error);
    }
  };

  const registrar = async () => {
    if (
      !usuario || !senha || !confirmarSenha || !nome ||
      !email || !cep || !rua || !bairro || !cidade || !numero
    ) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
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

    const enderecoCompleto = `${rua}, ${numero}, ${bairro}, ${complemento}, ${cidade}`;
    setEndereco(enderecoCompleto.trim().replace(/\s{2,}/g, ' '));

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
        endereco: enderecoCompleto,
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

        <Text style={styles.label}>CEP:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={cep}
            onChangeText={setCep}
            placeholder="Digite seu CEP"
            keyboardType="numeric"
            placeholderTextColor="#888"
          />
          <View style = {styles.btBusca}>
            <Pressable onPress={buscarEndereco} style={styles.botaoBuscarCep}>
              <Text style={styles.txtBotao}>Buscar</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.label}>Rua:</Text>
        <TextInput style={styles.input} value={rua} onChangeText={setRua} />

        <Text style={styles.label}>Número:</Text>
        <TextInput style={styles.input} value={numero} onChangeText={setNumero} />

        <Text style={styles.label}>Complemento:</Text>
        <TextInput
          style={styles.input}
          value={complemento}
          onChangeText={setComplemento}
        />

        <Text style={styles.label}>Bairro:</Text>
        <TextInput style={styles.input} value={bairro} onChangeText={setBairro} />

        <Text style={styles.label}>Cidade:</Text>
        <TextInput style={styles.input} value={cidade} onChangeText={setCidade} />

        <Pressable style={styles.botao} onPress={registrar}>
          <Text style={styles.txtBotao}>Registrar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
