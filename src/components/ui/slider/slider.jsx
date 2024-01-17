import React, { useState } from "react";
import { Scrollbar, Mousewheel, Pagination, FreeMode } from "swiper/modules";
import { StyledSwiper, StyledSwiperSlide } from "./style";
import Card from "./card";

import "swiper/css";
import "swiper/css/scrollbar";

export default function Slider({ props, setSwiperRef }) {
  return (
    <StyledSwiper
      onSwiper={setSwiperRef}
      modules={[Scrollbar, Pagination, Mousewheel, FreeMode]}
      slidesPerView="auto"
      spaceBetween={12}
      direction="vertical"
      scrollbar={{
        draggable: true,
      }}
      mousewheel={{
        sensetivity: 5,
      }}
      freeMode
    >
      {props.map((item) => (
        <StyledSwiperSlide>
          <Card props={item} key={props.id} />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
}
