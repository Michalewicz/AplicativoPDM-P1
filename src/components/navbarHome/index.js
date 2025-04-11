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
      <View style={styles.loginContainer}>
        <TouchableOpacity
          style={styles.login}
          onPress={() =>
            usuarioLogado === null
              ? navigationNavbar.navigate('Login')
              : navigationNavbar.navigate('Perfil')
          }>
          <EvilIcons name="user" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cart}
          onPress={() => navigationNavbar.navigate('Carrinho')}>
          <Ionicons name="cart" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
