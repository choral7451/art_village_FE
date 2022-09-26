import * as S from "./Styles";
import { IAdminMemberUI } from "./Types";
import { v4 as uuidv4 } from "uuid";

export default function AdminMemberUI(props: IAdminMemberUI) {
  const users = props.users?.map((el) => {
    return (
      <S.UserWrapper key={uuidv4()}>
        <S.ID>{el.id}</S.ID>
        <S.Name>{el.name}</S.Name>
        <S.Email>{el.email}</S.Email>
        <S.Membership>{String(el.membership)}</S.Membership>
        <S.SignupDate>{el.createdAt}</S.SignupDate>
      </S.UserWrapper>
    );
  });

  return (
    <S.Contents>
      <S.ContentsTitle>
        <S.Title>회원</S.Title>
        <S.SearchWrapper>
          <S.SearchIcon />
          <S.SearchInput placeholder="이름을 입력해주세요." />
        </S.SearchWrapper>
      </S.ContentsTitle>
      <S.HeaderWrapper>
        <S.ID>번호</S.ID>
        <S.Name>이름</S.Name>
        <S.Email>이메일</S.Email>
        <S.Membership>멤버쉽</S.Membership>
        <S.SignupDate>가입 일시</S.SignupDate>
      </S.HeaderWrapper>
      {users}
    </S.Contents>
  );
}
