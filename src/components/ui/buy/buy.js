import styled from "styled-components";

export const BuyButton = styled.button`
  background-color: ${props => props.theme.buttonColor};
  font-size: ${props => props.theme.fontSizeDefault};
  line-height: ${props => props.theme.lineHeightDefault};
  font-weight: 700;
  color: ${props => props.theme.colorWhite};
  border: none;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  &:hover {
    background-color: ${props => props.theme.buttonColorHoverActive};
    box-shadow: 0 4px 0 0#00000024;
  }
  &:active {
    box-shadow: none;
  }
`;
