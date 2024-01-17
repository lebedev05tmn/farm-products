import React from "react";
import { CheckboxFieldset, StyledText } from "./style";
import CheckboxItem from "./checkbox-item";
import { TextSize } from "../../text/text";

export default function CheckboxChoice({
  productsList,
  cost,
  setCost,
  swiperRef,
  goods,
  setGoods,
}) {
  return (
    <CheckboxFieldset>
      <StyledText size={TextSize.BIG_B} as="h3">
        Выберите продукты
      </StyledText>
      {productsList.map((item) => (
        <CheckboxItem
          swiperRef={swiperRef}
          props={item}
          key={productsList.id}
          state={cost}
          setState={setCost}
          setGoods={setGoods}
          goods={goods}
        />
      ))}
    </CheckboxFieldset>
  );
}
