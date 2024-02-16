import { createGlobalStyle } from "styled-components";
import Pretendard from "./Pretendard-Thin.woff";
import Pretendard2 from "./Pretendard-Thin.woff2";
import PretendardTtf from "./Pretendard-Thin.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: url(${Pretendard}) format("woff"),
         url(${Pretendard2}) format("woff2"),
         url(${PretendardTtf}) format("truetype");
  }

  body{
    font-family: "Pretendard";
  }
`;
