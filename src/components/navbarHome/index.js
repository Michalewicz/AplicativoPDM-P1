import { View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { usuarioLogado } from '../../pages/login/index';

export default function NavbarHome() {
  const navigationNavbar = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../img/PrimePizza.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}
