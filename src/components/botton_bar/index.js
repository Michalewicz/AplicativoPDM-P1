import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons'; // ou 'react-native-vector-icons'
import {styles} from './styles'
import { useNavigation } from '@react-navigation/native';
import { usuarioLogado } from '../../pages/login/index';

const BottonBar = () => {
  const navigationNavbar = useNavigation();
  return (
    <View style={styles.bottonBar}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() =>
          usuarioLogado == null
            ? navigationNavbar.navigate('Login')
            : navigationNavbar.navigate('Perfil')
        }>
        <EvilIcons name="user" size={40} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigationNavbar.navigate('Carrinho')}>
        <Ionicons name="cart" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default BottonBar;

