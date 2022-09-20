import Post from "../../commons/post/Post.container";
import * as S from "./Notice.styles";

export default function NoticeUI() {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Title>공지</S.Title>
        <S.Header>
          <S.PostTitleText>제목</S.PostTitleText>
          <S.PostDateText>등록일</S.PostDateText>
        </S.Header>
        <Post />
      </S.Wrapper>
    </S.Body>
  );
}
