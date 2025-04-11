import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#a20000',
  },
  logo: {
    width: 250,
    height: 100,
    marginLeft: 10,
    marginTop: 10,
  },
  loginContainer: {
    position: 'absolute',
    top: 45,
    right: 20,
    alignItems: 'center',
    justifyContent: 'column',
    borderWidth: 2,
    height: 70,
    width: 45,
    borderColor: '#a20000',
  },
  login: {
    marginTop: -5,
  },
  cart: {
    marginTop: 15,
    marginRight: 5,
  },
});

export { styles };
