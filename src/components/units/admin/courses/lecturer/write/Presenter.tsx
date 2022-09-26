import * as S from "./Styles";
import { IAdminLecturerWriteUI } from "./Types";

export default function AdminLecturerWriteUI(props: IAdminLecturerWriteUI) {
  return (
    <>
      <S.LoadingWrapper
        style={props.loading ? { display: "" } : { display: "none" }}
      >
        <S.Loading spinning={props.loading} size="large">
          <S.AlertMessage
            description="강의가 등록중입니다. 페이지를 이동하지 말아주세요."
            type="warning"
            showIcon
          />
        </S.Loading>
      </S.LoadingWrapper>
      <S.Contents
        onSubmit={props.handleSubmit(props.onClickRegister)}
        style={props.loading ? { display: "none" } : { display: "initial" }}
      >
        <S.ContentsTitle>
          <S.Title>강사 등록</S.Title>
        </S.ContentsTitle>
        <S.Lecture>
          <S.RowWrapper>
            <S.Text>이름 : </S.Text>
            <S.LecturerInput
              placeholder="이름을 입력해주세요."
              spellCheck="false"
              {...props.register("name")}
            />
          </S.RowWrapper>
          <S.Err>{props.formState.errors.name?.message}</S.Err>
          <S.RowWrapper>
            <S.Text>연락처 : </S.Text>
            <S.LecturerInput
              placeholder="휴대폰번호를 입력해주세요."
              spellCheck="false"
              {...props.register("phone")}
            />
          </S.RowWrapper>
          <S.Err>{props.formState.errors.phone?.message}</S.Err>
          <S.RowWrapper>
            <S.Text>이메일 : </S.Text>
            <S.LecturerInput
              placeholder="이메일을 입력해주세요."
              spellCheck="false"
              {...props.register("email")}
            />
          </S.RowWrapper>
          <S.Err>{props.formState.errors.email?.message}</S.Err>
          <S.RowWrapper>
            <S.Text>프로필 사진 : </S.Text>
            <S.Upload type="file" {...props.register("image")} />
          </S.RowWrapper>
          <S.RowWrapper style={{ paddingBottom: "80px" }}>
            <S.Text>프로필 : </S.Text>
            <S.TextArea
              modules={props.modules}
              onChange={props.onChangeProfile}
            />
          </S.RowWrapper>
          <S.Err>{props.profileErr}</S.Err>
        </S.Lecture>
        <S.WriteWrapper>
          <S.WriteBtn
            disabled={!props.formState.isDirty || !props.formState.isValid}
          >
            등록
          </S.WriteBtn>
        </S.WriteWrapper>
      </S.Contents>
    </>
  );
}
