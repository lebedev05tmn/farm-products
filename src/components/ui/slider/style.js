import styled, { css } from "styled-components";
import Text from "../text/text";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  margin-left: 20px;
  width: 100%;
  height: 728px;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  background-color: ${(props) => props.theme.colorWhite};
  height: 288px;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledImg = styled.img`
  object-fit: cover;
`;

export const AboutProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 20px;
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  .active {
    background-color: #88aa4d;
    color: white;
  }
`;

export const AboutButton = styled.a`
  display: block;
  padding: 8px 12px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  color: #000000;
  outline: none;
  border: 1px solid #0000001a;
  background-color: ${(props) => props.theme.backgroundColorGrayNew};
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.panelBackgroundColor};
    color: ${(props) => props.theme.colorWhite};
  }
`;

export const DescriptionText = styled(Text)`
  margin: 16px 0 14px 0;
`;

export const DescriptionPrice = styled(Text)`
  background-color: ${(props) => props.theme.backgroundColorBlue};
  height: 29px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeatureContainer = styled.div`
  height: 137px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FeatureSpan = styled.span`
  color: #000000;
  display: flex;
  gap: 5px;
`;

export const IternalContainer = styled(FeatureContainer)`
  height: 71px;
`;

export const IternalSpan = styled(FeatureSpan)`
  gap: 3px;
`;
