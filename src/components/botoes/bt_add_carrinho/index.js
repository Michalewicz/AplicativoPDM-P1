import { Text, Pressable, Alert } from 'react-native';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';

const caminho = FileSystem.documentDirectory + 'dados_carrinho.json';

export default function BtAdd({ quantidade = 1 }) {
  const navigation = useNavigation();
  const route = useRoute();
  const nome = route.name;

  const adicionarAoCarrinho = async () => {
    try {
      const existe = await FileSystem.getInfoAsync(caminho);
      let carrinho = { itens: [] };

      if (existe.exists) {
        const conteudo = await FileSystem.readAsStringAsync(caminho);
        carrinho = JSON.parse(conteudo);
      }

      for (let i = 0; i < quantidade; i++) {
        carrinho.itens.push({ nome });
      }

      await FileSystem.writeAsStringAsync(caminho, JSON.stringify(carrinho, null, 2));

      Alert.alert('Sucesso', `${quantidade}x ${nome} adicionado(s) ao carrinho!`);
      navigation.navigate('Carrinho');
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
      Alert.alert('Erro', 'Não foi possível adicionar ao carrinho.');
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.btAddCarrinho,
        pressed && styles.btAddCarrinhoPressed,
      ]}
      onPress={adicionarAoCarrinho}
    >
      <Text style={styles.txtAddCarrinho}>Adicionar ao carrinho</Text>
    </Pressable>
  );
}
