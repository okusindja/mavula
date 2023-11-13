import Routes from "./src/routes/Routes";
import { SafeAreaView, StatusBar } from "react-native";
import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
