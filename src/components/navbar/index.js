import { View, Image, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { usuarioLogado } from '../../pages/login/index';

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
    </View>
  );
}
