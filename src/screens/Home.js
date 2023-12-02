import { ScreenWithDrawerContainer, SearchInput } from "../elements/";
import { Text, StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";
import { BlockMenuSVG, DownArrowSVG, OrderBySVG } from "../components/svg";
import { ContentFolder } from "../components";

const Home = () => {
  return (
    <ScreenWithDrawerContainer>
      <View style={styles.header}>
        <Text style={styles.title}>Teu Espaco</Text>
        <BlockMenuSVG maxWidth={scale(20)} maxHeight={scale(20)} width="100%" />
      </View>
      <SearchInput placeholder="Pesquisar" />
      <View style={styles.blocksSection}>
        <View style={styles.textWithOrderByButton}>
          <View style={styles.textWithDownArrow}>
            <Text style={styles.text}>Blocks</Text>
            <DownArrowSVG
              maxWidth={scale(20)}
              maxHeight={scale(20)}
              width="100%"
            />
          </View>
          <OrderBySVG maxWidth={scale(20)} maxHeight={scale(20)} width="100%" />
        </View>
        <View style={styles.foldersContainer}>
          <ContentFolder
            folderName="FolderName"
            folderDescription="Dezembro 20.2020"
          />
          <ContentFolder
            folderName="FolderName"
            folderDescription="Dezembro 20.2020"
          />
          <ContentFolder
            folderName="FolderName"
            folderDescription="Dezembro 20.2020"
          />
          <ContentFolder
            folderName="FolderName"
            folderDescription="Dezembro 20.2020"
          />
          <ContentFolder
            folderName="FolderName"
            folderDescription="Dezembro 20.2020"
          />
          <ContentFolder
            folderName="FolderName"
            folderDescription="Dezembro 20.2020"
          />
        </View>
      </View>
    </ScreenWithDrawerContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(45),
    marginBottom: scale(16),
    justifyContent: "space-between",
  },
  title: {
    color: "#383838",
    fontSize: scale(21),
  },
  text: {
    color: "#383838",
    fontSize: scale(13),
    marginRight: scale(10),
  },
  textWithDownArrow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textWithOrderByButton: {
    width: "100%",
    flexDirection: "row",
    marginTop: scale(38),
    marginBottom: scale(20),
    justifyContent: "space-between",
  },
  foldersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  blocksSection: {
    justifyContent: "space-between",
  },
});
