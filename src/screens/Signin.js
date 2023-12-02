import { ScreenContainer, SearchInput } from "../elements/";
import { BlocksMenu } from "../components/";
import { Text, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const Signin = () => {
  return (
    <ScreenContainer>
      <Text style={styles.text}>Pedir Acesso</Text>
    </ScreenContainer>
  );
};

export default Signin;

const styles = StyleSheet.create({
  text: {
    color: "#383838",
    fontSize: scale(40),
  },
});
