import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a20000'
  },
  logo: {
    width: 275,
    height: 125,
    marginLeft: 10,
    marginTop: 10
  },
  loginContainer:{
      position: 'absolute',
      top: 45,
      right: 20,
      alignItems: 'center',
      justifyContent: 'column',
      height: 70,
      width: 45,
      },
  login: {
    marginTop: -5
    },
  cart: {
    marginTop:15,
    marginRight:5
    },
});


export {styles}
