import FeatureCard from "../features-card/features-card";
import { StyledList } from "./style";

export default function FeaturesList({ propsList }) {
  return (
    <StyledList>
      {propsList.map((item) => (
        <FeatureCard props={item} />
      ))}
    </StyledList>
  );
}
