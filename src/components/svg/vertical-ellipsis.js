<svg
  width="3"
  height="17"
  viewBox="0 0 3 17"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
></svg>;

import React from "react";
import { Svg, Circle } from "react-native-svg";

const VerticalEllipsis = ({ maxWidth, maxHeight, primaryColor }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle
      cx="1.5"
      cy="15.5"
      r="1.5"
      transform="rotate(-90 1.5 15.5)"
      fill={"currentColor" || primaryColor}
    />
    <Circle
      cx="1.5"
      cy="8.5"
      r="1.5"
      transform="rotate(-90 1.5 8.5)"
      fill={"currentColor" || primaryColor}
    />
    <Circle
      cx="1.5"
      cy="1.5"
      r="1.5"
      transform="rotate(-90 1.5 1.5)"
      fill={"currentColor" || primaryColor}
    />
  </Svg>
);
export default VerticalEllipsis;
