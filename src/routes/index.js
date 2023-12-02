import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SignintScreen } from "../screens";
import DrawerNavigator from "./drawer";

const Stack = createStackNavigator();

const MainRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signin" component={SignintScreen} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default MainRoutes;
