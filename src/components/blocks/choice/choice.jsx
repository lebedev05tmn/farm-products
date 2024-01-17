import React, { useState, useRef } from "react";
import { StyledSection, StyledForm, StyledAside } from "./style";
import CheckboxChoice from "../../ui/form/checkbox/checkbox-choice";
import SubmitChoice from "../../ui/form/submit/submit-choice";
import Slider from "../../ui/slider/slider";
import products from "../../../mocks/products-mock";

export default function Choice() {
  const [cost, setCost] = useState(1300);
  const [swiperRef, setSwiperRef] = useState(null);
  const [goods, setGoods] = useState(
    products.map((elem) => elem.name).slice(0, 3)
  );

  return (
    <StyledSection>
      <StyledForm method="post" action="">
        <StyledAside>
          <CheckboxChoice
            cost={cost}
            setCost={setCost}
            productsList={products}
            swiperRef={swiperRef}
            setGoods={setGoods}
            goods={goods}
          />
          <SubmitChoice cost={cost} goods={goods} />
        </StyledAside>
        <Slider props={products} setSwiperRef={setSwiperRef} />
      </StyledForm>
    </StyledSection>
  );
}
