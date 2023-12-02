import { ScreenContainer } from "../../elements";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { scale } from "react-native-size-matters";
import HeroLayout from "./hero-layout";
import { Button } from "../../components";
import { SmartIDSVG } from "../../components/svg";
import RightArrow from "../../components/svg/right-arrow";
import { useState } from "react";
import LoginForm from "./login-form";

const Login = ({ navigation }) => {
  const [activeLoginForm, setActiveLoginForm] = useState(false);
  return (
    <ScreenContainer>
      <HeroLayout subtitle="Seja bem-vindo a">
        <View>
          {!activeLoginForm && (
            <Text style={styles.resume}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              bibendum pellentesque mauris, nibh senectus dignissim euismod
              diam. Sed arcu eget et, id arcu ultricies scelerisque nisl.
            </Text>
          )}
          <Text
            style={[
              styles.InviteToTheAppText,
              { marginTop: activeLoginForm ? scale(10) : scale(45) },
            ]}
          >
            Conecte-se à sua instituição
          </Text>
          {activeLoginForm && <LoginForm />}
          <View style={styles.buttonsContainer}>
            <Button
              label={activeLoginForm ? "Regressar" : "Smart ID"}
              mr={20}
              onPress={() => activeLoginForm && setActiveLoginForm(false)}
              suffix={
                !activeLoginForm && (
                  <SmartIDSVG
                    width="100%"
                    maxWidth={scale(24)}
                    maxHeight={scale(25)}
                  />
                )
              }
            />
            <Button
              label={activeLoginForm ? "Entrar" : "Login"}
              variant="primary"
              onPress={() =>
                activeLoginForm
                  ? navigation.navigate("Home")
                  : setActiveLoginForm(true)
              }
              suffix={
                <RightArrow
                  width="100%"
                  maxWidth={scale(15)}
                  maxHeight={scale(11)}
                />
              }
            />
          </View>
          <Pressable style={{ marginTop: scale(25), alignItems: "center" }}>
            <Text style={styles.resume}>Criar uma conta</Text>
          </Pressable>
        </View>
      </HeroLayout>
    </ScreenContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  resume: {
    color: "#898989",
    fontSize: scale(13),
    marginTop: scale(20),
  },
  InviteToTheAppText: {
    color: "#898989",
    fontSize: scale(13),
  },
  smartIdButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
