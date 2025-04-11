import { View, FlatList } from 'react-native';
import Produto from '../produto/index';
import { styles } from './styles.js';
import dados from '../../fakeBD/produtos.json';

const imagemMap = {
  "../img/marguerita.png": require("../../img/marguerita.png"),
  "../img/5queijos.png": require("../../img/5queijos.png"),
  "../img/chocolatemorango.png": require("../../img/chocolatemorango.png"),
  "../img/esfihacarne.png": require("../../img/esfihacarne.png"),
};

export default function Carrossel({ categoria }) {
  const item = dados[categoria.toLowerCase()];
  const imagem = imagemMap[item.imagem];

  const data = Array.from({ length: 6 }, (_, i) => ({
    id: `${categoria}-${i}`,
    imagem,
    nome: item.nome,
    preco: item.preco,
  }));

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Produto
            imagem={item.imagem}
            nome={item.nome}
            preco={item.preco}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}