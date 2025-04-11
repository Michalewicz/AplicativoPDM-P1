import { View, ScrollView, Text } from 'react-native';
import Navbar from '../../components/navbar';
import { styles } from './styles';
import { usuarioLogado } from '../login/index.js';

export default function Perfil() {
  return (
    <View style={styles.borda}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.titulo}>Perfil do Usuário</Text>

        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.valor}>{usuarioLogado.nome}</Text>

        <Text style={styles.label}>Usuário:</Text>
        <Text style={styles.valor}>{usuarioLogado.usuario}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.valor}>{usuarioLogado.email}</Text>

        <Text style={styles.label}>Sexo:</Text>
        <Text style={styles.valor}>{usuarioLogado.sexo}</Text>

        <Text style={styles.label}>Endereço:</Text>
        <Text style={styles.valor}>{usuarioLogado.endereco || 'Não informado'}</Text>
      </ScrollView>
    </View>
  );
}