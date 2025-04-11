import { View, ScrollView, Text } from 'react-native';
import NavbarHome from '../../components/navbarHome';
import { styles } from './styles';
import Carrosel from '../../components/carrossel/index';

export default function Home() {
  return (
    <View style={styles.borda}>
      <NavbarHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.subTitulo}>Promoções</Text>
        <Carrosel categoria="promo" />
        <Text style={styles.subTitulo}>Pizzas Especiais</Text>
        <Carrosel categoria="pizza" />
        <Text style={styles.subTitulo}>Pizzas Doces</Text>
        <Carrosel categoria="doce" />
        <Text style={styles.subTitulo}>Outros Produtos</Text>
        <Carrosel categoria="outros" />
      </ScrollView>
    </View>
  );
}
