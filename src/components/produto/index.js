import { Text, View, Image, Pressable } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

export default function Produto({ imagem, nome, preco }) {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate(nome, {
      nome,
      imagem,
      preco,
    })} >
      <View>
        <Image source={imagem} style={styles.imagem} />
        <Text style={styles.tituloProduto}>{nome}</Text>
        <Text style={styles.valorProduto}>R$ {preco}</Text>
      </View>
    </Pressable>
  );
}

