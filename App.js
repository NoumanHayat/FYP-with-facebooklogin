import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import index from './src/Login/Screen/index';
import login from'./src/Login/Screen/login';
import createAccount from'./src/Login/Screen/createAccount';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomePage" component={index} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="createAccount" component={createAccount} />

        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
