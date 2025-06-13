import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bottonBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#a20000',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop:100,
  },
  iconContainer: {
    paddingHorizontal: 20,
  },
});
