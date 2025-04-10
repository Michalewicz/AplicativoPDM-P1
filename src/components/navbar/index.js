import { View, Image, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
  const navigationNavbar = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigationNavbar.goBack()}>
        <Ionicons name="arrow-back" size={40} color="white" />
      </TouchableOpacity>
      <Pressable onPress={() => navigationNavbar.navigate('Home')}>
        <Image
          source={require('../../img/PrimePizza.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Pressable>

      <View style={styles.loginContainer}>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigationNavbar.navigate('Login')}>
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
