import styled from "styled-components";

export const Card = styled.li`
  background-color: #e1edce;
  box-sizing: border-box;
  width: 540px;
  height: 197px;
  padding: ${(props) => props.theme.indent};
  margin: 0;
`;

export const CardNegative = styled(Card)`
  background-color: #f8ddd7;
`;

export const Owner = styled.span`
  background-color: #88aa4d;
  font-size: 14px;
  color: #ffffff;
  padding: 2px 10px;
`;

export const OwnerNegative = styled(Owner)`
  background-color: #f75531;
`;

export const FeatureHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const FeatureAbout = styled.div`
  margin-left: ${(props) => props.theme.indent};
`;
