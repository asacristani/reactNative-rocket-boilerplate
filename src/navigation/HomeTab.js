import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, MeScreen} from '../screens';
import theme from '../style/theme';

const Tab = createBottomTabNavigator();

export default function AuthStackScreen() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Me" component={MeScreen}/>
    </Tab.Navigator>
  );
};
