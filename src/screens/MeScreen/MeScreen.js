import {Button, Text, View} from "react-native";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/userSlice';

export default function MeScreen({ navigation }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Me</Text>
      <Button
        title="Logout"
        onPress={handleLogout}
      />
    </View>
  );
}