import { View,Image,TouchableOpacity,Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="white" />
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate('Home')}>
      <Image
        source={require('../../img/PrimePizza.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      </Pressable>
    </View>
  );
}

