import {Text, View} from "react-native";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';

import { logout } from '../../store/slices/userSlice';
import theme from "../../style/theme";

export default function MeScreen({ navigation }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Logout"
        onPress={handleLogout}
        mode="contained"
        style={{backgroundColor: theme.colors.primary}}
      >
          Logout
      </Button>
    </View>
  );
}