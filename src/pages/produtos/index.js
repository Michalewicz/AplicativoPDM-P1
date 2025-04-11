import { View, ScrollView, Text } from 'react-native';
import Navbar from '../../components/navbar';
import Produto from '../../components/produto';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Produtos() {
  return (
    <View style={styles.borda}>
      <Navbar />
      <Text style={styles.tituloNotFound}>Produto Não encontrado</Text>
      <ScrollView></ScrollView>
    </View>
  );
}
