import {Text, View, Image} from "react-native";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; // Para el icono de Google
import AppleIcon from 'react-native-vector-icons/MaterialCommunityIcons'; // Para el icono de Apple

import {login} from "../../store/slices/userSlice";
import theme from "../../style/theme";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  const fakeLogin = () => {
    dispatch(login({user: 'something'}));
  };
  const handleLoginPress = () => {
    fakeLogin()
  };

  const handleGoogleLogin = () => {
    fakeLogin()
  };

  const handleAppleLogin = () => {
    fakeLogin()
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../../../assets/icon.png')}
        style={{ width: 175, height: 200, marginBottom: 20 }}
      />
      <TextInput
        label="Email"
        mode="outlined"
        placeholder="Insert your email"
        style={{ width: 300, marginBottom: 10 }}
      />
      <TextInput
        label="Password"
        mode="outlined"
        placeholder="Insert your password"
        secureTextEntry
        style={{ width: 300, marginBottom: 10 }}
      />
      <Button
          mode="contained"
          onPress={handleLoginPress}
          style={{ width: 300, marginTop: 10, marginBottom: 30, backgroundColor: theme.colors.primary }}
      >
        Log in
      </Button>
      <Button
        icon={() => <Icon name="google" size={20} color="white" />}
        mode="contained"
        onPress={handleGoogleLogin}
        style={{ width: 300, marginTop: 10, backgroundColor: "#DB4437" }}
      >
        Access with Google
      </Button>
      <Button
        icon={() => <AppleIcon name="apple" size={20} color="white" />}
        mode="contained"
        onPress={handleAppleLogin}
        style={{ width: 300, marginTop: 10, backgroundColor: "black" }}
      >
        Access with Apple
      </Button>
      <Button
        mode="text"
        onPress={() => navigation.navigate('Register')}
        textColor={theme.colors.primary}
        style={{ width: 300, marginTop: 20}}
      >
        Sign up
      </Button>
    </View>
  );
}