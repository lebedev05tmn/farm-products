import Title, { TitleSize } from "../../title/title";
import {
  Card,
  CardNegative,
  Owner,
  OwnerNegative,
  FeatureHeader,
  FeatureAbout,
} from "./style";

export default function FeatureCard({ props }) {
  return (
    <>
      {props.isNegative ? (
        <CardNegative>
          <FeatureHeader>
            <img
              className="features__img"
              width={56}
              height={56}
              src={props.image}
              alt="Еда намного вкуснее"
            />
            <FeatureAbout>
              <OwnerNegative>{props.owner}</OwnerNegative>
              <Title size={TitleSize.EXTRA_SMALL}>{props.title}</Title>
            </FeatureAbout>
          </FeatureHeader>
          <p dangerouslySetInnerHTML={{ __html: props.about }}></p>
        </CardNegative>
      ) : (
        <Card>
          <FeatureHeader>
            <img
              className="features__img"
              width={56}
              height={56}
              src={props.image}
              alt="Еда намного вкуснее"
            />
            <FeatureAbout>
              <Owner>{props.owner}</Owner>
              <Title size={TitleSize.EXTRA_SMALL}>{props.title}</Title>
            </FeatureAbout>
          </FeatureHeader>
          <p dangerouslySetInnerHTML={{ __html: props.about }}></p>
        </Card>
      )}
    </>
  );
}
