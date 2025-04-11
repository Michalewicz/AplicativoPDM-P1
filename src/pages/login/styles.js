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
    placeholderTextColor:"#A9A9A9",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 0.5,
  },
});