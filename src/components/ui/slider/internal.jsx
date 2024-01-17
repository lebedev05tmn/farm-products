import { IternalContainer, IternalSpan } from "./style";
import Text, { TextSize } from "../text/text";

export default function Iternal({ props }) {
  return (
    <IternalContainer>
      {props.structure.map((elem) => (
        <IternalSpan>
          <Text size={TextSize.SMALL} as="span">
            <Text size={TextSize.SMALL_B} as="span">
              {elem.property}:{" "}
            </Text>
            {elem.value}
          </Text>
        </IternalSpan>
      ))}
    </IternalContainer>
  );
}
