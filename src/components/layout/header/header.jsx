import React from "react";
import { BuyButton } from "../../ui/buy/buy";
import Logo from "../../ui/logo/logo";
import Text, { TextSize } from "../../ui/text/text";
import { StyledSection } from "./style";
import { Link } from "react-router-dom";

export default function Header({ isHome }) {
  return (
    <StyledSection as="header">
      <Logo />
      {isHome ? (
        <Link to="/order">
          <BuyButton>Купить</BuyButton>
        </Link>
      ) : (
        <Link to="/">
          <Text size={TextSize.BIG_B}>Главная</Text>
        </Link>
      )}
    </StyledSection>
  );
}
