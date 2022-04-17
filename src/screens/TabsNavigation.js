import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Profile from './Profile';
import TimeLine from './TimeLine';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator initialRouteName='home'>
      <Tab.Screen name='home' component={Home}/>
      <Tab.Screen name='profile' component={Profile} />
      <Tab.Screen name='timeLine' component={TimeLine} />
    </Tab.Navigator>
  )
}

export default TabsNavigation