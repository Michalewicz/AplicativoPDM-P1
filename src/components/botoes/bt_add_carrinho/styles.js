import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  btAddCarrinho: {
    marginBottom: 20,
    backgroundColor: '#f77f00',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  btAddCarrinhoPressed: {
    backgroundColor: '#e76f00',
    transform: [{ scale: 0.97 }],
  },
  txtAddCarrinho: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
