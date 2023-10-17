import { View } from "react-native";
import { GradientContainer } from "../../elements";
import BlocksRow from "./BlockRow";
import { Container, Title } from "./styles";

const BlocksMenu = ({ title }) => {
  return (
    <GradientContainer>
      <Title>{title}</Title>
      <Container showsHorizontalScrollIndicator={false} horizontal>
        <View>
          <BlocksRow />
          <BlocksRow />
        </View>
      </Container>
    </GradientContainer>
  );
};

export default BlocksMenu;
