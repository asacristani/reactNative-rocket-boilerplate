import {Image, Text, View} from "react-native";
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import theme from "../../style/theme";

export default function OnboardingScreen({ navigation }) {

  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSkip = () => {
    // Puedes implementar una lógica para omitir el "onboarding" y llevar al usuario a la pantalla principal de la aplicación.
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Image
        source={require('../../../assets/icon.png')}
        style={{ width: "50%", height: 200, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>Welcome to ReactNative-Rocket-Boilerplate</Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginVertical: 20 }}>
        This is the onboarding of your mobile app
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Button
            mode="text"
            onPress={() => navigation.navigate('Login')}
            textColor={theme.colors.primary}
            style={{ flex: 1 }}
        >
          Skip
        </Button>
        <Button
            mode="contained"
            onPress={handleNext}
            style={{ flex: 1, marginLeft: 10, backgroundColor: theme.colors.primary }}>
          Next
        </Button>
      </View>
    </View>
  );
};
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Onboarding</Text>
//       <Button
//         title="Go to Login"
//         onPress={() => navigation.navigate('Login')}
//       />
//     </View>
//   );
// }