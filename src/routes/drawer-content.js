import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
import { DrawerHeader } from "../components";
import { scale } from "react-native-size-matters";
import { LogoutSVG } from "../components/svg";

const CustomDrawerContent = (props) => {
  const navigation = props.navigation;
  const handleLogout = () => {
    alert("Logout com sucesso");
    navigation.navigate("Login");
  };

  return (
    <>
      <DrawerHeader />
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          flex: 1,
          paddingTop: scale(170),
        }}
      >
        <DrawerItemList {...props} />
        <DrawerItem
          label="Terminar Sessão"
          labelStyle={{
            color: Colors.active,
            fontSize: scale(13),
            marginLeft: scale(-20),
          }}
          icon={() => (
            <LogoutSVG
              maxHeight={scale(24)}
              maxWidth={scale(24)}
              width="100%"
            />
          )}
          onPress={handleLogout}
        />
      </DrawerContentScrollView>
    </>
  );
};

export default CustomDrawerContent;

const Colors = {
  bg: "#EEF7FE",
  active: "#383838",
  inactive: "#656565",
  transparent: "transparent",
};
