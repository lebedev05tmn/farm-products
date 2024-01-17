import { FeatureContainer, FeatureSpan } from "./style";
import Text, { TextSize } from "../text/text";

export default function Feature({ props }) {
  return (
    <FeatureContainer>
      {props.specifications.map((element) => (
        <FeatureSpan>
          <Text size={TextSize.SMALL_B} as="span">
            {element.property}:
          </Text>
          <Text size={TextSize.SMALL} as="span">
            {element.value}
          </Text>
        </FeatureSpan>
      ))}
    </FeatureContainer>
  );
}
