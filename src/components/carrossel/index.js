import { View, ScrollView, Text } from 'react-native';
import Produto from '../produto/index';
import { styles } from './styles';
import dados from '../../fakeBD/produtos.json';

// Mapeia as strings do JSON para require()s válidos
const imagemMap = {
  "../img/marguerita.png": require("../../img/marguerita.png"),
  "../img/5queijos.png": require("../../img/5queijos.png"),
  "../img/chocolatemorango.png": require("../../img/chocolatemorango.png"),
  "../img/esfihacarne.png": require("../../img/esfihacarne.png"),
};

export default function Carrossel({ categoria }) {
  const item = dados[categoria.toLowerCase()];
  const imagem = imagemMap[item.imagem]; // pega imagem usando o mapa

  return (
    <View>
      <Text style={styles.subTitulo}>{item.titulo}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Produto
            key={i}
            imagem={imagem}
            nome={item.nome}
            preco={item.preco}
          />
        ))}
      </ScrollView>
    </View>
  );
}