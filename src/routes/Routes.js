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

const CustomDrawerContent = (props) => {
  const { height } = useWindowDimensions();
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
          onPress={() => alert("Terminar Sessão")}
        />
      </DrawerContentScrollView>
    </>
  );
};
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
