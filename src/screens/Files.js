import { ScreenWithDrawerContainer, SearchInput } from "../elements/";
import { BlocksMenu } from "../components/";
import { Text, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const Files = () => {
  return (
    <ScreenWithDrawerContainer>
      <Text style={styles.text}>Minha conta</Text>
    </ScreenWithDrawerContainer>
  );
};

export default Files;

const styles = StyleSheet.create({
  text: {
    color: "#383838",
    fontSize: scale(40),
  },
});
