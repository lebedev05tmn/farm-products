import styled from "styled-components";
import { Section } from "../../styled/section/section";

export const StyledSection = styled(Section)`
  height: 768px;
  padding-top: 40px;
  background-color: ${(props) => props.theme.backgroundColorGrayNew};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`;

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 688px;
  justify-content: space-between;
`;
