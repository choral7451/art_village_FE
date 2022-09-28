import Tag from "../tag/Container";
import * as S from "./Card.styles";
import { ICard } from "./Card.types";
import { v4 as uuidv4 } from "uuid";

export default function CardUI(props: ICard) {
  let tag;
  if (props.tag) {
    tag = props.tag.split(",").map((el) => {
      return <Tag key={uuidv4()} text={el} type="view" />;
    });
  }

  return (
    <>
      <S.Wrapper onClick={props.onClick(`/courses/${props.id}/unit`)}>
        <S.Image
          src={`https://storage.cloud.google.com/${props.image}`}
          onClick={props.onClick(`/courses/${props.id}/unit`)}
        />
        <S.Title onClick={props.onClick(`/courses/${props.id}/unit`)}>
          {props.title}
        </S.Title>
        <S.Name onClick={props.onClick(`/courses/${props.id}/unit`)}>
          {" "}
          {props.name}
        </S.Name>
        <S.RateWrapper onClick={props.onClick(`/courses/${props.id}/unit`)}>
          <S.Star value={5} />
        </S.RateWrapper>
        <S.TagWrapper onClick={props.onClick(`/courses/${props.id}/unit`)}>
          {tag}
        </S.TagWrapper>
      </S.Wrapper>
    </>
  );
}
