import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Database from './Database';

export default function AppItem(props, navigation){
  function handleDeletePress(){ 
      Alert.alert(
          "Atenção!",
          "Tem certeza que deseja excluir este item?",
          [
              {
              text: "Não",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
              },
              { text: "Sim", onPress: () => {
                Database.deleteItem(props.id)
                  .then(response => props.navigation.navigate("AppList", {id: props.id}));
                }
              }
          ],
          { cancelable: false }
          );
  }

  async function handleEditPress(){ 
    const item = await Database.getItem(props.id);
    props.navigation.navigate("AppForm", item);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{props.item}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.icon} onPress={handleDeletePress} >        
          <Icon name="trash-2" color="black" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={handleEditPress} >
          <FontAwesome name="edit" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#fff',
    marginTop: 20,
    width: '100%'
  },
  buttonsContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderBottomColor: '#CCC',
    paddingBottom: 10,
    marginTop: 10,
  },
  textItem: {
    fontSize: 20,
  },
  icon: {
    marginLeft: 20,
    alignItems: 'center'
  },
});