import { Text, View, Image } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; // Para el icono de Google
import AppleIcon from 'react-native-vector-icons/MaterialCommunityIcons'; // Para el icono de Apple

import { login } from "../../store/slices/userSlice";
import theme from "../../style/theme";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const fakeLogin = () => {
    dispatch(login({ user: 'something' }));
  };

  const handleLoginPress = () => {
    fakeLogin();
  };

  const handleGoogleLogin = () => {
    fakeLogin();
  };

  const handleAppleLogin = () => {
    fakeLogin();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icon.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <TextInput
        label="Email"
        mode="outlined"
        placeholder="Insert your email"
        style={styles.input}
      />
      <TextInput
        label="Password"
        mode="outlined"
        placeholder="Insert your password"
        secureTextEntry
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleLoginPress}
        style={styles.buttonPrimary}
      >
        Log in
      </Button>
      <Button
        icon={() => <Icon name="google" size={20} color="white" />}
        mode="contained"
        onPress={handleGoogleLogin}
        style={styles.buttonGoogle}
      >
        Access with Google
      </Button>
      <Button
        icon={() => <AppleIcon name="apple" size={20} color="white" />}
        mode="contained"
        onPress={handleAppleLogin}
        style={styles.buttonApple}
      >
        Access with Apple
      </Button>
      <Button
        mode="text"
        onPress={() => navigation.navigate('Register')}
        textColor={theme.colors.primary}
        style={styles.buttonSecondary}
      >
        Sign up
      </Button>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  image: {
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  buttonPrimary: {
    width: '100%',
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: theme.colors.primary,
  },
  buttonGoogle: {
    width: '100%',
    marginTop: 10,
    backgroundColor: "#DB4437",
  },
  buttonApple: {
    width: '100%',
    marginTop: 10,
    backgroundColor: "black",
  },
  buttonSecondary: {
    width: '100%',
    marginTop: 20,
    paddingBottom: 20,
  },
};

export default LoginScreen;
