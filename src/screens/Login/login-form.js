import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "../../elements";
import { scale } from "react-native-size-matters";
import { PasswordSVG, StudentSVG } from "../../components/svg";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Input Icon={StudentSVG} />
      </View>
      <Input Icon={PasswordSVG} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    marginTop: scale(32),
  },
  inputWrapper: {
    marginBottom: scale(20),
  },
});
