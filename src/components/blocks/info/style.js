import styled from "styled-components";
import { Section } from "../../styled/section/section";
import infoImage from "../../../assets/info.svg";
import Title from "../../ui/title/title";
import Text from "../../ui/text/text";

export const StyledSection = styled(Section)`
  height: 600px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BackgroundElement = styled.div`
  &::after {
    position: relative;
    top: 23px;
    right: 0;
    z-index: 5;
    content: url(${infoImage});
  }
`;

export const TextBlock = styled.span`
  width: 637px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 24px;
`;

export const StyledText = styled(Text)`
  width: 538px;
`;
