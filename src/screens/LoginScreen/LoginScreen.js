import {Button, Text, View} from "react-native";
import React from "react";

export default function LoginScreen({ navigation, updateUser }) {

  const fakeLogin = () => {
    updateUser(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login screen</Text>
      <Button
        title="Fake Login"
        onPress={fakeLogin}
      />
      <Button
        title="Sign up"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}