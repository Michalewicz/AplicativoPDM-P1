import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';

const imagemMap = {
  '../img/marguerita.png': require('../../img/marguerita.png'),
  '../img/5queijos.png': require('../../img/5queijos.png'),
  '../img/chocolatemorango.png': require('../../img/chocolatemorango.png'),
  '../img/esfihacarne.png': require('../../img/esfihacarne.png'),
};

export default function CarProduto({ nome, preco, quantidade, imagemPath, botaoRemover }) {
  const navigation = useNavigation();
  const imagem = imagemMap[imagemPath];

  return (
    <View style={styles.card}>
      <Pressable onPress={() => navigation.navigate(`Produto_${nome}`)}>
        <Image source={imagem} style={styles.imagem} />
      </Pressable>
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.quantidade}>Quantidade: {quantidade}</Text>
        <Text style={styles.preco}>Total: R$ {preco}</Text>
      </View>

      {/* Botão de Remover opcional */}
      {botaoRemover && (
        <View>
          {botaoRemover}
        </View>
      )}
    </View>
  );
}