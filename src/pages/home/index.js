import { View, ScrollView, Text } from 'react-native';
import NavbarHome from '../../components/navbarHome';
import BottonBar from '../../components/botton_bar/index'
import { styles } from './styles';
import Carrosel from '../../components/carrossel/index';

export default function Home() {
  return (
    <View style={styles.borda}>
      <NavbarHome />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
        <Text style={styles.subTitulo}>Promoções</Text>
        <Carrosel categoria="promo" />
        <Text style={styles.subTitulo}>Pizzas Especiais</Text>
        <Carrosel categoria="pizza" />
        <Text style={styles.subTitulo}>Pizzas Doces</Text>
        <Carrosel categoria="doce" />
        <Text style={styles.subTitulo}>Outros Produtos</Text>
        <Carrosel categoria="outros" />
      </ScrollView>
      <BottonBar />
    </View>
  );
}
