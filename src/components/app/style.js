import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}

body,
html,
* {
  margin: 0;
}

body {
  position: relative;
  min-height: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  font-weight: 400;
  color: ${(props) => props.theme.fontColorBlack};
}
`;
