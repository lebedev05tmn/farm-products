import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import FeaturesList from "../../ui/features/features-list/features-list";
import featuresMock from "../../../mocks/features-mock";
import { BuyButton } from "../../ui/buy/buy";
import { Link } from "react-router-dom";
import { StyledSection } from "./style";

export default function Features() {
  return (
    <StyledSection>
      <Title size={TitleSize.MEDIUM}>Почему фермерские продукты лучше?</Title>
      <FeaturesList propsList={featuresMock} />
      <Link to="/order">
        <BuyButton>Купить</BuyButton>
      </Link>
    </StyledSection>
  );
}
