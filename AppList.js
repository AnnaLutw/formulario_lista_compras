import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AppItem from './AppItem';
import Database from './Database';

export default function AppList({ route, navigation }) {
  
  const [items, setItems] = useState([]);
  useEffect(() => {
      Database.getItems().then(items => setItems(items));
  }, [route]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Lista de itens</Text>
      <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.itemsContainer}>
          { items.map(item => {
              return <AppItem key={item.id} id={item.id} item={item.quantidade + '  de ' + item.descricao} navigation={navigation} />
          }) }
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0C6E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 20,
    width: '95%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
  },
});