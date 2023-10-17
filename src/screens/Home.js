import { ScreenContainer, SearchInput } from "../elements/";
import { BlocksMenu } from "../components/";

const Home = () => {
  return (
    <ScreenContainer>
      <SearchInput />
      <BlocksMenu title="Cursos" />
    </ScreenContainer>
  );
};

export default Home;
