import styled from "styled-components";
import { Section } from "../../styled/section/section";

export const StyledSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.theme.headerHeight};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  a {
    text-decoration: none;
  }
`;
