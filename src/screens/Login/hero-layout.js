import { ScreenContainer, SearchInput } from "../../elements";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  useWindowDimensions,
  View,
} from "react-native";
import { scale } from "react-native-size-matters";
import { HeroSVG } from "../../components/svg";

const HeroLayout = ({ children, subtitle }) => {
  return (
    <>
      <View style={styles.heroImage}>
        <HeroSVG maxHeight={scale(321)} maxWidth={scale(375)} width="100%" />
      </View>
      <View style={{ padding: 21 }}>
        <View>
          <Text style={styles.textLarge}>{subtitle}</Text>
          <Text style={styles.textHeadline}>Mavula</Text>
        </View>
        <View>{children}</View>
      </View>
    </>
  );
};

export default HeroLayout;

const styles = StyleSheet.create({
  textLarge: {
    color: "#000",
    fontSize: scale(20),
  },
  textHeadline: {
    color: "#000",
    fontSize: scale(38),
  },
  heroImage: {
    top: scale(-16),
    left: scale(-16),
  },
});
