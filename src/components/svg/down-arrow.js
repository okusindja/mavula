import React from "react";
import { Path, Svg } from "react-native-svg";

const DownArrow = ({ maxWidth, maxHeight }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M13.28 5.96666L8.93333 10.3133C8.42 10.8267 7.58 10.8267 7.06667 10.3133L2.72 5.96666"
      stroke="black"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default DownArrow;
