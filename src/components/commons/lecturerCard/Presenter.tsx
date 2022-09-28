import * as S from "./Styles";
import { ILecturerCardUI } from "./Types";

export default function LecturerCardUI(props: ILecturerCardUI) {
  return (
    <>
      <S.LecturerWrapper>
        <S.LecturerImage
          src={`https://storage.cloud.google.com/${props.data.image}`}
        />
        <S.LecturerInfoWrapper>
          {props.type === "select" ? (
            <S.LecturerTextWrapper>
              <S.LecturerTextLeftWrapper>
                <S.LecturerName>{props.data.name}</S.LecturerName>
                <S.LecturerInfoText>
                  연락처 : {props.data.phone}
                </S.LecturerInfoText>
                <S.LecturerInfoText>
                  이메일 : {props.data.email}
                </S.LecturerInfoText>
              </S.LecturerTextLeftWrapper>
              <S.LecturerTextRigthWrapper>
                <S.LecturerSelectRadio
                  type="radio"
                  name="lecturerSelect"
                  value={props.data.id}
                  onChange={props.change(props.data.id)}
                  checked={Number(props.check) === props.data.id ? true : false}
                />
                <S.LecturerSelectText>선택</S.LecturerSelectText>
              </S.LecturerTextRigthWrapper>
            </S.LecturerTextWrapper>
          ) : null}
          <S.LecturerInfoTextArea
            className="view ql-editor"
            dangerouslySetInnerHTML={{ __html: props.data.profile }}
          ></S.LecturerInfoTextArea>
        </S.LecturerInfoWrapper>
      </S.LecturerWrapper>
    </>
  );
}
