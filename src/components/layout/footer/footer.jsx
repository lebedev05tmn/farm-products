import React from "react";
import Logo from "../../ui/logo/logo";
import Text, { TextSize } from "../../ui/text/text";
import { StyledFooter } from "./style";

export default function Footer() {
  return (
    <StyledFooter as="footer">
      <Logo />
      <Text size={TextSize.BIG}>Создано 2024</Text>
    </StyledFooter>
  );
}
