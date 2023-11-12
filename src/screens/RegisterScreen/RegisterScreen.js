import { Image, Text, View, Alert } from "react-native";
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input'
import theme from "../../style/theme";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSignUp = () => {
    // Field validation
    if (!email || !phone || !password || !repeatPassword) {
      Alert.alert('Error', 'Please fill out all the fields.');
      return;
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    // Phone number validation
    if (!/^[0-9]{10}$/.test(phone)) {
      Alert.alert('Error', 'Please enter a valid phone number (10 numeric digits).');
      return;
    }

    // Strong password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Error',
        'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    // Check if passwords match
    if (password !== repeatPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // If all validations pass, you can send the form data to your backend or perform other actions.
    // Here, you could make a registration request.
    // Example: registerUser(email, phone, password);

    // Clear the fields after a successful registration
    setEmail('');
    setPhone('');
    setPassword('');
    setRepeatPassword('');
    Alert.alert('Success', 'Registration successful!');
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
        value={email}
        mode="outlined"
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Phone"
        mode="outlined"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <TextInput
        label="Password"
        secureTextEntry
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TextInput
        label="Repeat Password"
        secureTextEntry
        mode="outlined"
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        style={styles.input}
      />

        <Button
          mode="contained"
          onPress={handleSignUp}
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
        >
          Sign Up
        </Button>

    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  image: {
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  buttonContainer: {

  },
  button: {
    width: '100%',
    marginLeft: 10,
  },
};
