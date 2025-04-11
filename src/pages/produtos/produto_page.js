import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Navbar from '../../components/navbar';
import Produto from '../../components/produto';
import BtAdd from '../../components/botoes/bt_add_carrinho';
import QtSelector from '../../components/botoes/qt_selector/index'
import { styles } from './styles';
import { useRoute } from '@react-navigation/native';

export default function ProdutosPage() {
  const route = useRoute();
  const { nome, imagem, preco } = route.params;
  const [quantidade, setQuantidade] = useState(1);

  return (
    <View style={styles.borda}>
      <Navbar />
      <Text style={styles.titulo}>{nome}</Text>
      <ScrollView>
        <Produto nome={nome} imagem={imagem} preco={preco}/>
        <QtSelector quantidade={quantidade} setQuantidade={setQuantidade} />
        <BtAdd quantidade={quantidade} />
      </ScrollView>
    </View>
  );
}