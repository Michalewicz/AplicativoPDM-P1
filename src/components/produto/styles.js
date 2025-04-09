import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
    container:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      margin:5,
      borderWidth: 3,
      height:200,
      width: 170,
      borderRadius:15,
      backgroundColor:'white',
    },
    imagem:{
      width: 150,
      height: 105,
      resizeMode: 'stretch',
      alignSelf: 'center',
    },
    tituloProduto:{
      fontSize: 17,
      marginTop: 5,
      textAlign: 'center',
    },
    valorProduto:{
      fontSize: 15,
      marginTop: 15,
      color: 'darkgreen',
      textAlign: 'center',
    },
});


export {styles}
