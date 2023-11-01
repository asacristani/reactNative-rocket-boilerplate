import {Button, Text, View} from "react-native";
import React from "react";

export default function MeScreen({ navigation, updateUser }) {

  const logout = () => {
    updateUser(null);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Me</Text>
      <Button
        title="Logout"
        onPress={logout}
      />
    </View>
  );
}