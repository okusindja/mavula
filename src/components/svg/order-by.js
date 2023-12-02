import React from "react";
import { Path, Svg } from "react-native-svg";

const OrderBy = ({ maxWidth, maxHeight }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M3 7H21M6 12H18M10 17H14"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </Svg>
);
export default OrderBy;
