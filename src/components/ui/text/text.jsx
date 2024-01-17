import styled, { css } from "styled-components";

export const TextSize = {
  BIG: "big",
  BIG_B: "big_b",
  SMALL: "small",
  SMALL_B: "small_b",
};

const TextSizeValue = {
  [TextSize.BIG]: {
    fontSize: "18px",
    lineHeight: "27px",
    fontWeight: "400",
  },
  [TextSize.BIG_B]: {
    fontSize: "18px",
    lineHeight: "27px",
    fontWeight: "700",
  },
  [TextSize.SMALL]: {
    fontSize: "14px",
    lineHeight: "21px",
    fontWeight: "400",
  },
  [TextSize.SMALL_B]: {
    fontSize: "14px",
    lineHeight: "21px",
    fontWeight: "700",
  },
};

// Заголовок
export const Text = styled.p`
  margin: 0;
  padding: 0;
  color: #333333;
  ${(props) => {
    const values = TextSizeValue[props.size || TextSize.MEDIUM];
    return css`
      font-size: ${values.fontSize};
      line-height: ${values.lineHeight};
      font-weight: ${values.fontWeight};
    `;
  }};
`;

export default Text;
