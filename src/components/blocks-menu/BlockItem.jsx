import React from "react";
import { BlockItemContainer, BlockItemText } from "./styles";

const BlockItem = ({ name }) => {
  return (
    <BlockItemContainer>
      <BlockItemText>{name}</BlockItemText>
    </BlockItemContainer>
  );
};

export default BlockItem;
