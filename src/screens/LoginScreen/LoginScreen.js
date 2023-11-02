import {Button, Text, View} from "react-native";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/slices/userSlice";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  const fakeLogin = () => {
    dispatch(login({user: 'something'}));
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