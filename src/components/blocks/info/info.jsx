import React from "react";
import { TitleSize } from "../../ui/title/title";
import { TextSize } from "../../ui/text/text";
import {
  BackgroundElement,
  StyledSection,
  TextBlock,
  StyledTitle,
  StyledText,
} from "./style";

export default function Info() {
  return (
    <StyledSection>
      <TextBlock>
        <StyledTitle size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </StyledTitle>
        <StyledText size={TextSize.BIG}>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </StyledText>
      </TextBlock>
      <BackgroundElement />
    </StyledSection>
  );
}
