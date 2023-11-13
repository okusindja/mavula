import React from "react";
import { Path, Svg } from "react-native-svg";

const Logout = ({ maxWidth, maxHeight }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M17.44 14.62L20 12.06L17.44 9.5M9.76001 12.06H19.93M11.76 20C7.34001 20 3.76001 17 3.76001 12C3.76001 7 7.34001 4 11.76 4"
      stroke="black"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default Logout;
