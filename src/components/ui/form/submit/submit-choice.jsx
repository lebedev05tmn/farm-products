import React, { useState } from "react";
import {
  SubmitFieldset,
  StyledText,
  StyledInput,
  Price,
  StyledBuyButton,
} from "./style";
import Text, { TextSize } from "../../text/text";
import Title, { TitleSize } from "../../title/title";

const locateNumber = Number =>
  Number.toString()
    .split("")
    .reverse()
    .join("")
    .replace(/\d\d\d/g, "$& ")
    .split("")
    .reverse()
    .join("");

export default function SubmitChoice({ cost, goods }) {
  const [adress, setAdress] = useState(0);
  const formData = {
    adress: adress,
    cost: cost,
    goods: goods,
  };
  return (
    <SubmitFieldset>
      <StyledText size={TextSize.BIG_B}>Сделать заказ</StyledText>
      <StyledInput
        name="adress"
        type="text"
        placeholder="Введите адрес доставки"
        onChange={evt => setAdress(evt.target.value)}
      />
      <Price>
        <Text size={TextSize.SMALL} as="span">
          Цена
        </Text>
        <Title size={TitleSize.SMALL} as="h4">
          {locateNumber(cost)} руб.
        </Title>
      </Price>
      <StyledBuyButton
        disabled={!adress}
        type="submit"
        onClick={evt => {
          evt.preventDefault();
          alert(JSON.stringify(formData));
        }}>
        Купить
      </StyledBuyButton>
    </SubmitFieldset>
  );
}
