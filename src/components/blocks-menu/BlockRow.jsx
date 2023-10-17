import React from "react";
import { BlocksRowContainer } from "./styles";
import BlockItem from "./BlockItem";
import { useGetData } from "../../hooks/use-get-data";

const BlocksRow = () => {
  const { categories } = useGetData();
  console.log(categories);
  return (
    <BlocksRowContainer>
      {categories.map((file, index) => (
        <BlockItem key={index + 1} name={file} />
      ))}
    </BlocksRowContainer>
  );
};

export default BlocksRow;
