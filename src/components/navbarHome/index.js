import { View,Image,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

export default function NavbarHome() {
const navigation = useNavigation();
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

