import { useState } from 'react';
import { View, ScrollView, Text, Image, Switch } from 'react-native';
import Navbar from '../../components/navbar';
import BtAdd from '../../components/botoes/bt_add_carrinho';
import QtSelector from '../../components/botoes/qt_selector/index';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';

export default function ProdutosPage() {
  const route = useRoute();
  const { nome, imagem, preco } = route.params;
  const [quantidade, setQuantidade] = useState(1);
  const [comAzeitonas, setComAzeitonas] = useState(false);

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={imagem} style={styles.pizzaImage} />
        <Text style={styles.titulo}>{nome}</Text>
        <Text style={styles.preco}>R$ {parseFloat(preco).toFixed(2)}</Text>
        <QtSelector quantidade={quantidade} setQuantidade={setQuantidade} />

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Deseja azeitonas?</Text>
          <Switch
            value={comAzeitonas}
            onValueChange={setComAzeitonas}
            thumbColor={comAzeitonas ? '#2a9d8f' : '#ccc'}
            trackColor={{ false: '#ccc', true: '#a8dadc' }}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <BtAdd quantidade={quantidade} />
      </View>
    </View>
  );
}
