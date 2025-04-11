import { View, ScrollView, Text } from 'react-native';
import NavbarHome from '../../components/navbarHome';
import { styles } from './styles';
import Carrosel from '../../components/carrossel/index'

export default function Registro() {
  return (
    <View style={styles.borda}>
      <NavbarHome />
      <ScrollView showsVerticalScrollIndicator={false}>

      </ScrollView>
    </View>
  );
}
