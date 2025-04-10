import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Navbar from '../../components/navbar';
import Produto from '../../components/produto';
import BtAdd from '../../components/botoes/bt_add_carrinho';
import QtSelector from '../../components/botoes/qt_selector/index'
import { styles } from './styles';

export default function Produtos() {
  const [quantidade, setQuantidade] = useState(1);

  return (
    <View style={styles.borda}>
      <Navbar />
      <Text style={styles.titulo}>Pizza Marguerita</Text>
      <ScrollView>
        <Produto />
        <QtSelector quantidade={quantidade} setQuantidade={setQuantidade} />
        <BtAdd quantidade={quantidade} />
      </ScrollView>
    </View>
  );
}