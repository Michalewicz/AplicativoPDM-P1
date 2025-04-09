import { View,Image,Pressable } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import Logo from '../../img/PrimePizza.png'
import VoltarBtn from '../../img/bt_back.png'

export default function Navbar() {
const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Pressable  onPress={() => navigation.goBack()} >
    <Image source = {VoltarBtn}/>
    </Pressable>
    
    <Pressable  onPress={() => navigation.navigate('Home')} >
    <Image source = {Logo} style={styles.logo} />
    </Pressable>

    </View>
  );
}

