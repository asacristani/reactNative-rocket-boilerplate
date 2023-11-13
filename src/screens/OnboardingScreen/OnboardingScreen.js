import { Image, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import theme from "../../style/theme";

export default function OnboardingScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
      <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
        <Image
          source={require("../../../assets/icon.png")}
          style={{ height: 200, marginBottom: 20 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
          Welcome to{"\n"}
          ReactNative-Rocket-Boilerplate
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", marginVertical: 20 }}>
          This is the onboarding of your mobile app
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button
          mode="text"
          onPress={() => navigation.navigate("Login")}
          textColor={theme.colors.primary}
          style={{ flex: 1 }}
        >
          Skip
        </Button>
        <Button
          mode="contained"
          onPress={handleNext}
          style={{
            flex: 1,
            marginLeft: 10,
            backgroundColor: theme.colors.primary,
          }}
        >
          Next
        </Button>
      </View>
    </View>
  );
}
