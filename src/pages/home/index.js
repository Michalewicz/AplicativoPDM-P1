import { View, ScrollView, Text } from 'react-native';
import Navbar from '../../components/navbar';
import { styles } from './styles';
import Carrosel from '../../components/carrossel/index'

export default function Home() {
  return (
    <View style={styles.borda}>
      <Navbar />
      <ScrollView>
        <Carrosel categoria="promo" />
        <Carrosel categoria="pizza" />
        <Carrosel categoria="doce" />
        <Carrosel categoria="outros" />
      </ScrollView>
    </View>
  );
}
