import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import Database from './Database';

export default function AppForm({ route, navigation }) {
  var id = route.params ? route.params.id : undefined;
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');

  useEffect(() => {
    if (!route.params) return;
    setDescricao(route.params.descricao);
    setQuantidade(route.params.quantidade.toString());
  }, [route]);

  function handleDescriptionChange(descricao) {
    setDescricao(descricao);
  }

  function handleQuantityChange(quantidade) {
    setQuantidade(quantidade);
  }

  async function handleButtonPress() {
    const listItem = { descricao, quantidade: parseInt(quantidade) };
    Database.saveItem(listItem, id).then((response) =>
      navigation.navigate('AppList', listItem)
    );
  }

  function resetForm() {
    if (route.params) route.params.id = undefined;
    setDescricao('');
    setQuantidade('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicione itens à lista</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleDescriptionChange}
          placeholder="Digite a descrição"
          clearButtonMode="always"
          value={descricao}
        />
        <TextInput
          style={styles.input}
          onChangeText={handleQuantityChange}
          placeholder="Digite a quantidade"
          keyboardType={'numeric'}
          clearButtonMode="always"
          value={quantidade.toString()}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.icon} onPress={handleButtonPress}>
            <AntDesign name="checkcircleo" size={35} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={resetForm}>
            <AntDesign name="pluscircleo" size={35} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0C6E7',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    //flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch',
  },
  buttonsContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    //borderBottomWidth: 1,
    //borderBottomColor: '#CCC',
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  icon: {
    marginLeft: 20,
    alignItems: 'center',
  },
});
