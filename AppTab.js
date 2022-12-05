import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AppList from './AppList';
import AppForm from './AppForm';
 
const { Navigator, Screen } = createBottomTabNavigator();
const Tab = createBottomTabNavigator();

function AppTab() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    tabBarActiveTintColor: "#32264d",
                    tabBarInactiveTintColor: "#c1bccc",
                    tabBarActiveBackgroundColor: "#ebebf5",
                    tabBarInactiveBackgroundColor: "#fafafc",
                    tabBarLabelStyle: {
                        fontSize: 13,
                        position: 'absolute',
                        top: 15,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    tabBarIconStyle: { display: "none" }
                }}
            >
                <Screen name="AppList" component={AppList}  
                options={{tabBarLabel: "Lista"}, { title: 'Lista' }} />
                <Screen name="AppForm" component={AppForm} 
                options={{tabBarLabel: "Formulário"}, { title: 'Formulário' }}/>
            </Navigator>
        </NavigationContainer>
    );
}

{/*}
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Formulário!</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lista" component={AppList}/>
      <Tab.Screen name="Formulário" component={AppForm} />
    </Tab.Navigator>
  );
}
*/}

export default AppTab;