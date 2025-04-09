import { View, ScrollView, Text } from 'react-native';
import Navbar from '../../components/navbar';
import Produto from '../../components/produto';
import { styles } from './styles';

export default function Produtos() {
  return (
    <View style={styles.borda}>
      <Navbar />
      <Text style={styles.titulo}>PrimePizza</Text>
      <ScrollView>
        <Produto/>
      </ScrollView>
    </View>
  );
}
