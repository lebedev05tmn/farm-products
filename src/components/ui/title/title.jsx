import styled, { css } from "styled-components";

export const TitleSize = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small",
  EXTRA_SMALL: "extra_small",
};

const TitleSizeValue = {
  [TitleSize.BIG]: {
    fontSize: "44px",
    lineHeight: "50px",
  },
  [TitleSize.MEDIUM]: {
    fontSize: "36px",
    lineHeight: "41px",
  },
  [TitleSize.SMALL]: {
    fontSize: "24px",
    lineHeight: "31px",
  },
  [TitleSize.EXTRA_SMALL]: {
    fontSize: "18px",
    lineHeight: "27px",
  },
};

// Заголовок
export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: bold;
  ${(props) => {
    const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
    return css`
      font-size: ${values.fontSize};
      line-height: ${values.lineHeight};
    `;
  }};
`;

export default Title;
