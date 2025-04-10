import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  imagem: {
    width: 80,        
    height: 80,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  infoContainer: {
    marginLeft: 16,
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  quantidade: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  preco: {
    fontSize: 16,
    color: '#222',
    fontWeight: '600',
    marginTop: 4,
  },
});