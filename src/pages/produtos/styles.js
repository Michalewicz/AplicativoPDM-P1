import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
  },
  content: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  pizzaImage: {
    width: '90%',
    height: 250,
    marginTop: 20,
    resizeMode:'stretch'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d62828',
    marginTop: 20,
    textAlign: 'center',
  },
  preco: {
    fontSize: 22,
    fontWeight: '600',
    color: '#f77f00',
    marginTop: 10,
  },
  switchContainer: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  switchLabel: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  
  qtSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
    gap: 25,
  },
  qtButton: {
    backgroundColor: '#d62828',
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  qtButtonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  qtValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    minWidth: 30,
    textAlign: 'center',
  }
});
