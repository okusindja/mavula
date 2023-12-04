import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "../../elements";
import { scale, verticalScale } from "react-native-size-matters";
import { PasswordSVG, StudentSVG } from "../../components/svg";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Input Icon={StudentSVG} placeholder="Número de estudante" />
      </View>
      <Input Icon={PasswordSVG} placeholder="Palavra-passe" />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(21),
  },
  inputWrapper: {
    marginBottom: verticalScale(16),
  },
});
