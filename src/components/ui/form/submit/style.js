import styled from "styled-components";
import Text from "../../text/text";
import { BuyButton } from "../../buy/buy";

export const SubmitFieldset = styled.fieldset`
  display: block;
  width: 353px;
  height: 315px;
  background-color: ${props => props.theme.colorWhite};
  box-sizing: border-box;
  padding: 24px 20px 20px 20px;
  border: none;
  box-shadow: 0px 0px 1px 0px #0000000a, 0px 2px 6px 0px #0000000a,
    0px 10px 20px 0px #0000000a;
`;

export const StyledText = styled(Text)`
  margin-bottom: 24px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding: 14px 0 13px 12px;
  border: 1px solid #0000001a;
  background-color: ${props => props.theme.backgroundColorGrayNew};
  margin-bottom: 20px;
  &::placeholder {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #333333;
  }
`;

export const Price = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const StyledBuyButton = styled(BuyButton)`
  width: 100%;
`;
