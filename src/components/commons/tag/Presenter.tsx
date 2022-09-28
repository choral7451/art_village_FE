import * as S from "./Styles";
import { ITag } from "./Types";

export default function TagUI(props: ITag) {
  return (
    <S.Wrapper>
      <S.TagInput>{props.text}</S.TagInput>
      {props.type === "delete" ? (
        <S.Delete type="button" className={props.text} onClick={props.click}>
          X
        </S.Delete>
      ) : null}
    </S.Wrapper>
  );
}
