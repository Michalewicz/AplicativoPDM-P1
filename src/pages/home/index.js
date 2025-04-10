import { View, ScrollView, Text } from 'react-native';
import NavbarHome from '../../components/navbarHome';
import { styles } from './styles';
import Carrosel from '../../components/carrossel/index'

export default function Home() {
  return (
    <View style={styles.borda}>
      <NavbarHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carrosel categoria="promo" />
        <Carrosel categoria="pizza" />
        <Carrosel categoria="doce" />
        <Carrosel categoria="outros" />
      </ScrollView>
    </View>
  );
}
