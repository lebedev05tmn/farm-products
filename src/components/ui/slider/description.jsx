import { DescriptionText, DescriptionPrice } from "./style";
import { TextSize } from "../text/text";

export default function Description({ props }) {
  return (
    <>
      <DescriptionText size={TextSize.SMALL}>
        {props.description}
      </DescriptionText>
      <DescriptionPrice
        size={TextSize.SMALL_B}
        as="span"
      >{`${props.price} руб. / ${props.weight} гр.`}</DescriptionPrice>
    </>
  );
}
