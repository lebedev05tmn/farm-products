import React, { useEffect, useState } from "react";
import { StyledLabel, CheckboxInput, StyledDiv } from "./style";
import { TextSize } from "../../text/text";

export default function CheckboxItem({
  props,
  setState,
  state,
  swiperRef,
  setGoods,
  goods,
}) {
  const [checked, setChecked] = useState(props.isChecked);
  const [isCheckedIndex, setIsChekedIndex] = useState(0);

  return (
    <StyledDiv>
      <CheckboxInput
        type="checkbox"
        name="product"
        id={`product-${props.id + 1}`}
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          if (!checked) {
            setState(state + props.price);
            setIsChekedIndex(props.id);
            swiperRef.slideTo(isCheckedIndex, 0);
            setGoods([...goods, props.name]);
          } else {
            setState(state - props.price);
            setGoods(goods.filter((elem) => elem != props.name));
          }
        }}
        value={props.price}
      />
      <StyledLabel
        size={TextSize.BIG}
        as="label"
        for={`product-${props.id + 1}`}
      >
        {props.name}
      </StyledLabel>
    </StyledDiv>
  );
}
