import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  borda: {
    flex: 1,
    backgroundColor: 'silver',
  },
  container: {
    flex: 1,
    backgroundColor: 'silver',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 36,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: 1,
  },
  subTitulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#7F8C8D',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: '35',
    color: '#34495E',
    marginBottom: 8,
  },
  input: {
    borderColor: '#BDC3C7',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 15,
    padding: 12,
    fontSize: 18,
    alignSelf: 'center',
    width: 350,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    placeholderTextColor: '#A9A9A9',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  picker: {
    fontSize: 16,
    color: '#2C3E50',
    alignSelf: 'center',
    width: 350,
    paddingHorizontal: 12,
  },
  botao: {
    flex: 1,
    backgroundColor: '#2C3E50',
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
  txtBotao: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  btBusca:{
    backgroundColor:'green',
    size:'40',
  },
  botaoBuscarCep:{
    alignSelf:'center'
  }
});
