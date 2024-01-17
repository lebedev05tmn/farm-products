import styled from "styled-components";
import Text from "../../text/text";
import tickImage from "../../../../assets/tick.svg";

export const CheckboxFieldset = styled.fieldset`
  display: block;
  width: 353px;
  height: 355px;
  background-color: ${(props) => props.theme.colorWhite};
  box-sizing: border-box;
  padding: 24px 20px 12px 20px;
  border: none;
  box-shadow: 0px 0px 1px 0px #0000000a, 0px 2px 6px 0px #0000000a,
    0px 10px 20px 0px #0000000a;
`;

export const StyledText = styled(Text)`
  margin-bottom: 12px;
`;

export const StyledLabel = styled(Text)`
  display: flex;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  width: 100%;
  &::after {
    margin-left: auto;
    display: block;
    justify-content: space-between;
    content: "";
    background-color: ${(props) => props.theme.backgroundColorGrayNew};
    width: 24px;
    height: 24px;
    border: 1px solid #0000001a;
    box-sizing: border-box;
  }
`;

export const CheckboxInput = styled.input`
  display: none;
  &:checked + ${StyledLabel}::after {
    background-color: #fc9b27;
    display: flex;
    justify-content: center;
    align-items: center;
    content: url(${tickImage});
    width: 24px;
    height: 24px;
    border: 1px solid #0000001a;
    box-sizing: border-box;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
