import { StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainRoutes from "./src/routes";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      {/* <StatusBar backgroundColor="transparent" barStyle="dark-content" /> */}
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
    </>
  );
};

export default App;
