import { Image,Pressable } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import VoltarBtn from '../../../img/seta.png'

export default function Bt_login() {
const navigation = useNavigation();
  return (
    <Pressable style={styles.container} onPress={() => navigation.goBack()} >
    <Image source = {VoltarBtn} style={styles.imagem} />
    </Pressable>
  );
}

