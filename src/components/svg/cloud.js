import React from "react";
import { Path, Svg } from "react-native-svg";

const Cloud = ({ maxWidth, maxHeight }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.98095 19.9793C7.82246 19.993 7.66205 20 7.5 20C4.46243 20 2 17.5376 2 14.5C2 11.7483 4.02073 9.46862 6.65919 9.06387C7.31294 6.16504 9.90364 4 13 4C16.5899 4 19.5 6.91015 19.5 10.5C19.5 10.7041 19.4906 10.906 19.4722 11.1053C21.4901 11.5497 23 13.3485 23 15.5C23 17.9853 20.9853 20 18.5 20C18.3413 20 18.1845 19.9918 18.03 19.9758C16.5713 20.442 14.8472 20.7115 13 20.7115C11.1574 20.7115 9.43731 20.4434 7.98095 19.9793Z"
      fill="currentColor"
    />
  </Svg>
);
export default Cloud;
