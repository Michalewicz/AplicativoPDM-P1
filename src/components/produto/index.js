import { Text, View, Image,Pressable } from 'react-native';

import { styles } from './styles'

export default function Produto({imagem,nome,preco,}) {

  return (
    <Pressable style={styles.container}>
      <View>
        <Image source={imagem} style={styles.imagem} />
        <Text style={styles.tituloProduto}>{nome}</Text>
        <Text style={styles.valorProduto}>R$ {preco}</Text>
      </View>
    </Pressable>
  );
}

