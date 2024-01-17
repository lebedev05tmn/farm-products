import React, { useState } from "react";
import { StyledImg, AboutProduct, StyledDiv, AboutButton } from "./style";
import Title, { TitleSize } from "../title/title";
import Description from "./description";
import Feature from "./feature";
import Iternal from "./internal";

export default function Card({ props }) {
  const [about, setAbout] = useState(<Description props={props} />);
  const [isActiveIndex, setIsActiveIndex] = useState(0);
  return (
    <>
      <StyledImg src={props.image} width="248" height="248" />
      <AboutProduct>
        <Title size={TitleSize.SMALL} as="h4">
          {props.name}
        </Title>
        <StyledDiv>
          <AboutButton
            className={isActiveIndex == 0 ? `active` : ""}
            onClick={() => {
              setAbout(<Description props={props} />);
              setIsActiveIndex(0);
            }}
          >
            Описание
          </AboutButton>
          <AboutButton
            className={isActiveIndex == 1 ? `active` : ""}
            onClick={() => {
              setAbout(<Feature props={props} />);
              setIsActiveIndex(1);
            }}
          >
            Характеристики
          </AboutButton>
          <AboutButton
            className={isActiveIndex == 2 ? `active` : ""}
            onClick={() => {
              setAbout(<Iternal props={props} />);
              setIsActiveIndex(2);
            }}
          >
            Свойства
          </AboutButton>
        </StyledDiv>
        {about}
      </AboutProduct>
    </>
  );
}
