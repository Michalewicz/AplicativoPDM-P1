import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  borda: {
    flex: 1,
    backgroundColor: 'silver', 
  },
  scroll:{
    marginTop:20,
  },
  label: {
    fontSize:20,
  },
  input: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    fontSize: 20,
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  botao: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  txtBotao: {
    color: '#000',
    fontSize: 26,
  },
});