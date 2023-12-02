import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FolderSVG, VerticalEllipsisSVG } from "../svg";
import { scale } from "react-native-size-matters";
import colors from "../../design-system/theme/light-theme/colors";

const ContentFolder = ({ folderName, folderDescription }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FolderSVG
          width="100%"
          maxWidth={scale(33)}
          maxHeight={scale(33)}
          primaryColor={colors.primary}
          secondaryColor={colors.darkBlueShade}
        />
        <VerticalEllipsisSVG
          width="100%"
          maxWidth={scale(20)}
          maxHeight={scale(20)}
        />
      </View>
      <Text style={styles.title}>{folderName}</Text>
      <Text style={styles.description}>{folderDescription}</Text>
    </View>
  );
};

export default ContentFolder;

const styles = StyleSheet.create({
  container: {
    width: "46%",
    marginLeft: "2%",
    marginRight: "2%",
    marginBottom: "4%",
    borderRadius: scale(10),
    paddingRight: scale(10),
    paddingBottom: scale(20),
    paddingVertical: scale(12),
    paddingHorizontal: scale(15),
    backgroundColor: colors.primary + "1F",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: scale(13),
    marginTop: scale(8),
    color: colors.primary,
  },
  description: {
    fontSize: scale(11),
    color: colors.primary,
  },
});
