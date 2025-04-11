import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  borda: {
    flex: 1,
    backgroundColor: 'silver',
  },
  scroll: {
    padding: 20,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    color: '#34495E',
    marginTop: 15,
    marginBottom: 5,
    fontWeight: '600',
  },
  imagem: {
    alignSelf:'center', 
    width: 200, 
    height: 200
  },
  valor: {
    fontSize: 18,
    color: '#2C3E50',
    backgroundColor: '#D7DAE2',
    padding: 10,
    borderRadius: 8,
  },
  btDesconectar: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: 30,
    paddingVertical: 14,
    marginHorizontal: 5,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  txtDesconectar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 0.5,
  },
});

export { styles };