import {LoginScreen, OnboardingScreen, RegisterScreen} from "../screens";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

export default function AuthStackScreen({updateUser}) {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="Login">
        {(props) => <LoginScreen {...props} updateUser={updateUser} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}