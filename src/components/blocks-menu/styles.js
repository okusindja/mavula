import styled from "styled-components/native";
import space from "../../design-system/common/space";

const gap = 7;

export const Container = styled.ScrollView`
  flex: 1;
  padding: 30px 0;
`;

export const BlocksRowContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 10px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-left: ${space.S}px;
`;

export const BlocksRow = styled.View`
  flex: 1;
  padding: 30px 0;
  flex-direction: row;
  margin: ${gap}px ${gap * 2}px;
`;

export const BlockItemContainer = styled.View`
  width: 180px;
  margin: 0 ${gap}px;
  background-color: #999999;
  padding: 30px ${space.M}px;
`;

export const BlockItemText = styled.Text`
  color: white;
  text-align: center;
`;
