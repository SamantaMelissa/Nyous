import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//Navigations
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


//Páginas
import login from './pages/login';
import home from './pages/home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Autenticado = () => {
  return(
      
    <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="Home" component={home} />
        <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
       
       )
      }
      
      const Logout = ({navigation}) => {
        
        return(
          <View>
              <Text> Deseja realmente sair da aplicação?</Text>
              <Button onPress={() =>{
                AsyncStorage.removeItem('@jwt');
                navigation.push('login');
              }} title="SAIR" ></Button>
        </View>
  )
}

    export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown : false}}>
          <Stack.Screen name="login" component={login} />
          <Stack.Screen name="Autenticado" component={Autenticado} />

        </Stack.Navigator>
    </NavigationContainer>

    );
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
