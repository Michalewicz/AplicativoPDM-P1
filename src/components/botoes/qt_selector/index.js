import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../../pages/produtos/styles';

export default function QtSelector({ quantidade, setQuantidade }) {
  return (
    <View style={styles.qtSelectorContainer}>
      <TouchableOpacity
        onPress={() => quantidade > 1 && setQuantidade(quantidade - 1)}
        style={styles.qtButton}
      >
        <Text style={styles.qtButtonText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.qtValue}>{quantidade}</Text>

      <TouchableOpacity
        onPress={() => setQuantidade(quantidade + 1)}
        style={styles.qtButton}
      >
        <Text style={styles.qtButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
