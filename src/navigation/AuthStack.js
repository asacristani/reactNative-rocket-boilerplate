import React from 'react';
import {LoginScreen, OnboardingScreen, RegisterScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

export default function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}
