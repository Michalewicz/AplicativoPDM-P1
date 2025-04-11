import { View, ScrollView, Text, Image } from 'react-native';
import Navbar from '../../components/navbar';
import { styles } from './styles';
import pix from '../../img/pix.png';
import simbolo from '../../img/piquis.png';

export default function Pagamento() {
  return (
    <View style={styles.borda}>
      <Navbar />
      <Text style={{fontSize:36, alignSelf:'center', marginTop:10, fontWeight:'bold'}}>Faça o</Text>
      <Image source={simbolo} style={{alignSelf:'center', aspectRatio:5/2, height:undefined, width:300, resizeMode:'stretch'}}/>
      <Image source={pix} style={{width:350, height: 350, alignSelf: 'center', marginTop: 20}}/>

      
    </View>
  );
}
