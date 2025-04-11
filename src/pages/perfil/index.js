import { View, ScrollView, Image, Pressable, Text, Alert } from 'react-native';
import Navbar from '../../components/navbar';
import { styles } from './styles';
import { usuarioLogado, desconectarUsuario } from '../login/index.js';
import fotoPerfil from '../../img/fotoperfil.png';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const navigation = useNavigation();

  return (
    <View style={styles.borda}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.titulo}>Perfil do Usuário</Text>
        <Image source={fotoPerfil} style={styles.imagem} />
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.valor}>{usuarioLogado.nome}</Text>

        <Text style={styles.label}>Usuário:</Text>
        <Text style={styles.valor}>{usuarioLogado.usuario}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.valor}>{usuarioLogado.email}</Text>

        <Text style={styles.label}>Sexo:</Text>
        <Text style={styles.valor}>{usuarioLogado.sexo}</Text>

        <Text style={styles.label}>Endereço:</Text>
        <Text style={styles.valor}>
          {usuarioLogado.endereco || 'Não informado'}
        </Text>

        <Pressable
          style={styles.btDesconectar}
          onPress={() => {
            desconectarUsuario();
            Alert.alert('Atenção', 'Usuário desconectado com sucesso!');
            navigation.navigate('Login');
          }}>
          <Text style={styles.txtDesconectar}>Desconectar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
