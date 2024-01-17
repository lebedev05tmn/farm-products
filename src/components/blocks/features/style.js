import styled from "styled-components";
import { Section } from "../../styled/section/section";

export const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.colorWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  a {
    text-decoration: none;
  }
`;
