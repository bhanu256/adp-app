import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Splash from './Splash'
import Login from './Login';
import Home from './Home';
import TabsNavigation from './TabsNavigation';

const Stack = createNativeStackNavigator();

const SplashNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown: false}}>
          <Stack.Screen name='splash' component={Splash}></Stack.Screen>
          <Stack.Screen name='login' component={Login}></Stack.Screen>
          <Stack.Screen name='tabsNavigation' component={TabsNavigation}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default SplashNavigation