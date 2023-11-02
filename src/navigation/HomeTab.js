import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen, LoginScreen, MeScreen} from "../screens";

const Tab = createBottomTabNavigator();

export default function AuthStackScreen() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Me" component={MeScreen}/>
      </Tab.Navigator>
  )};
