import { View, ScrollView, Text } from 'react-native';

import Produto from '../../components/produto';
import { styles } from './styles';
import Carrosel from '../../components/carrossel/index'

export default function PaginaProduto() {
  return (
    <View style={styles.borda}>
      <Text style={styles.titulo}>PrimePizza</Text>
      <ScrollView>
        <Carrosel categoria="promo" />
        <Carrosel categoria="pizza" />
        <Carrosel categoria="doce" />
        <Carrosel categoria="outros" />
      </ScrollView>
    </View>
  );
}
