import React from "react";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Platform, useWindowDimensions } from "react-native";
import { FilesScreen, HomeScreen } from "../screens";
import { DrawerHeader } from "../components";
import { scale } from "react-native-size-matters";
import { LogoutSVG } from "../components/svg";
import CustomDrawerContent from "./drawer-content";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerContentStyle: "none",
        overlayColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        drawerActiveBackgroundColor: Colors.transparent,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerLabelStyle: { fontSize: scale(13) },
        drawerHideStatusBarOnOpen: Platform.OS === "ios" ? true : false,
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: "60%",
        },
        sceneContainerStyle: {
          backgroundColor: Colors.bg,
        },
      }}
    >
      <Drawer.Screen name="Início" component={HomeScreen} />
      <Drawer.Screen name="Minha conta" component={FilesScreen} />
      <Drawer.Screen name="Armazenamento" component={FilesScreen} />
      <Drawer.Screen name="Turmas" component={FilesScreen} />
      <Drawer.Screen name="Definições" component={FilesScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const Colors = {
  bg: "#EEF7FE",
  active: "#383838",
  inactive: "#656565",
  transparent: "transparent",
};
