import React from "react";
import { Path, Svg } from "react-native-svg";

const RightArrow = ({ maxWidth, maxHeight }) => (
  <Svg width={maxWidth} height={maxHeight} viewBox="0 0 15 11" fill="none">
    <Path
      d="M9.35824 1L14 5.5L9.35824 10M1 5.5H13.87"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default RightArrow;
