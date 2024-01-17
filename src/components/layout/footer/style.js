import styled from "styled-components";
import { Section } from "../../styled/section/section";

export const StyledFooter = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme.footerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #0000001a;
`;
