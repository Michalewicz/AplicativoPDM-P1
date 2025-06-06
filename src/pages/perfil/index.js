import { View, ScrollView, Image, Pressable, Text, Alert } from 'react-native';
import Navbar from '../../components/navbar';
import { styles } from './styles';
import { usuarioLogado, desconectarUsuario } from '../login/index.js';
import fotoPerfil from '../../img/fotoperfil.png';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import React, { useState, useEffect } from 'react';

export default function Perfil() {
  const navigation = useNavigation();

  const [endrco, setEndrco] = useState(null);

  useEffect(() => {
    const fetchEndereco = async () => {
      if (usuarioLogado && usuarioLogado.endereco) {
        try {
          const response = await api.get('/' + usuarioLogado.endereco + '/json/');
          setEndrco(response.data);
        } catch (error) {
          console.error('Erro ao buscar endereço:', error);
        }
      }
    };

    fetchEndereco();
  }, []);

  const end =
    endrco
      ? `${endrco.logradouro}, ${endrco.bairro}, ${endrco.localidade} - ${endrco.uf}`
      : 'Não informado';

  return (
    <View style={styles.borda}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.titulo}>Perfil do Usuário</Text>
        <Image source={fotoPerfil} style={styles.imagem} />
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.valor}>{usuarioLogado?.nome || 'Não informado'}</Text>

        <Text style={styles.label}>Usuário:</Text>
        <Text style={styles.valor}>{usuarioLogado?.usuario || 'Não informado'}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.valor}>{usuarioLogado?.email || 'Não informado'}</Text>

        <Text style={styles.label}>Sexo:</Text>
        <Text style={styles.valor}>{usuarioLogado?.sexo || 'Não informado'}</Text>

        <Text style={styles.label}>Endereço:</Text>
        <Text style={styles.valor}>{end}</Text>

        <Pressable
          style={styles.btDesconectar}
          onPress={() => {
            desconectarUsuario();
            Alert.alert('Atenção', 'Usuário desconectado com sucesso!');
            navigation.navigate('Login');
          }}>
          <Text style={styles.txtDesconectar}>Desconectar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
