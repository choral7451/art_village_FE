import CardUI from "./Card.presenter";
import { ICard } from "./Card.types";

export default function Card(props: ICard) {
  return (
    <CardUI
      id={props.id}
      image={props.image}
      tag={props.tag}
      name={props.name}
      title={props.title}
      onClick={props.onClick}
    />
  );
}
