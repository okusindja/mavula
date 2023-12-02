import React from "react";
import { Path, Svg } from "react-native-svg";

const SmartID = ({ maxWidth, maxHeight }) => (
  <Svg width={maxWidth} height={maxHeight} viewBox="0 0 24 25" fill="none">
    <Path
      d="M12 15.38C11.09 15.38 10.35 14.64 10.35 13.73V11.26C10.35 10.35 11.09 9.61 12 9.61C12.91 9.61 13.65 10.35 13.65 11.26V13.73C13.65 14.64 12.91 15.38 12 15.38Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <Path
      d="M16.98 13.97C16.78 16.55 14.62 18.57 12 18.57C9.24 18.57 7 16.33 7 13.57V11.43C7 8.66999 9.24 6.42999 12 6.42999C14.59 6.42999 16.72 8.39999 16.97 10.92"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <Path
      d="M15 2.5H17C20 2.5 22 4.5 22 7.5V9.5M2 9.5V7.5C2 4.5 4 2.5 7 2.5H9M15 22.5H17C20 22.5 22 20.5 22 17.5V15.5M2 15.5V17.5C2 20.5 4 22.5 7 22.5H9"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default SmartID;
