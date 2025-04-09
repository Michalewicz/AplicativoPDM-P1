import { View, ScrollView, Text } from 'react-native';
import Produto from '../produto/index';
import { styles } from './styles';

export default function Carrosel({ categoria }) {
  const dados = {
    promo: {
      titulo: 'Promoções',
      imagem: 'https://superpizzapan.com.br/wp-content/uploads/2024/04/marguerita.png',
      nome: 'Pizza Marguerita',
      preco: '35',
    },
    pizza: {
      titulo: 'Pizzas Especiais',
      imagem: 'https://cdnv2.moovin.com.br/bancadoholandes/imagens/produtos/det/cd8acd2b842ee36d2ce757416c6b910f4c7d3b3f_2803250935305440.png',
      nome: 'Pizza 5 Queijos',
      preco: '65',
    },
    doce: {
      titulo: 'Doces',
      imagem: 'https://www.citypng.com/public/uploads/preview/strawberry-chocolate-pizza-on-a-rustic-plate-free-png-735811696681167j4ppywwyqn.png?v=2025022322',
      nome: 'Pizza Chocolate e Morango',
      preco: '40',
    },
    outros: {
      titulo: 'Outros Produtos',
      imagem: 'https://i0.wp.com/kssara.com.br/wp-content/uploads/2022/10/ESF_ABERTA_CARNE_V2.png?fit=1000,1000&ssl=1',
      nome: 'Esfiha de Carne',
      preco: '10',
    },
  };
  const categoriaSelecionada = dados[categoria] || dados['promo'];

  return (
    <View>
      <Text style={styles.subTitulo}>{categoriaSelecionada.titulo}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {[...Array(6)].map((_, index) => (
          <Produto
            key={index}
            imagem={categoriaSelecionada.imagem}
            nome={categoriaSelecionada.nome}
            preco={categoriaSelecionada.preco}
          />
        ))}
      </ScrollView>
    </View>
  );
}