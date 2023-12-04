import { ScreenContainer, SearchInput } from "../../elements";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  useWindowDimensions,
  View,
} from "react-native";
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { HeroSVG } from "../../components/svg";

const HeroLayout = ({ children, subtitle }) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <View style={styles.heroImage}>
        <HeroSVG
          width="100%"
          maxWidth={width}
          maxHeight={moderateVerticalScale(375)}
        />
      </View>
      <View style={{ paddingHorizontal: 21 }}>
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
    left: scale(-16),
    marginTop: verticalScale(-65),
  },
});
