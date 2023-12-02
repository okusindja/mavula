import { ScreenWithDrawerContainer, SearchInput } from "../elements";
import { BlocksMenu } from "../components";

const MyProfile = () => {
  return (
    <ScreenWithDrawerContainer>
      <SearchInput />
      <BlocksMenu title="Categorias" />
    </ScreenWithDrawerContainer>
  );
};

export default MyProfile;
