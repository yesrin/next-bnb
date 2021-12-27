import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import palette from "./palette";

const globalStyles = css`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    color:${palette.black};
  }
`;

const GlobalStyles = createGlobalStyle`
    ${globalStyles}
`;

export default GlobalStyles;
