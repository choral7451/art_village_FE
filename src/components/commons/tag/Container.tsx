import TagUI from "./Presenter";
import { ITag } from "./Types";

export default function Tag(props: ITag) {
  return <TagUI text={props.text} click={props.click} type={props.type} />;
}
