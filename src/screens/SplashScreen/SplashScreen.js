import {Text, View} from "react-native";
import React from "react";

export default function SplashScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Splash</Text>
    </View>
  );
}