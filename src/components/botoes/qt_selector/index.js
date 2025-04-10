import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';

export default function QtSelector({ quantidade, setQuantidade }) {
  const incrementar = () => setQuantidade(prev => prev + 1);
  const decrementar = () => setQuantidade(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <View style={styles.containerQt}>
      <Pressable onPress={decrementar} style={styles.botaoMenos}>
        <Text style={styles.txtBotao}>-</Text>
      </Pressable>

      <View style={styles.displayQuantidade}>
        <Text style={styles.txtQuantidade}>Quantidade de Produtos</Text>
        <Text style={styles.txtQuantidadeNumero}>{quantidade}</Text>
      </View>

      <Pressable onPress={incrementar} style={styles.botaoMais}>
        <Text style={styles.txtBotao}>+</Text>
      </Pressable>
    </View>
  );
}