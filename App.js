import { View } from 'react-native';
import { styles } from './styles.js'

import PaginaProduto from './src/pages/venda_produtos'

export default function App() {
  return (
    <View style={styles.borda}>
      <PaginaProduto />
    </View>
  );
}
