import * as S from "./Styles";
import { IAdminCourseWriteUI } from "./Types";
import { v4 as uuidv4 } from "uuid";

export default function AdminCourseWriteUI(props: IAdminCourseWriteUI) {
  const list = [];
  if (props.makeLecture) {
    for (let i = 0; i < props.makeLecture; i++) {
      list.push(
        <S.Body key={uuidv4()}>
          <S.RowWrapper>
            <S.Text>강의 제목 : </S.Text>
            <S.LectureTitleInput
              placeholder="제목을 입력해주세요."
              spellCheck="false"
            />
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Text>강의 영상 : </S.Text>
            <S.Upload type="file" />
          </S.RowWrapper>
        </S.Body>
      );
    }
  }

  return (
    <S.Contents>
      <S.ContentsTitle>
        <S.Title>강의 등록</S.Title>
      </S.ContentsTitle>
      <S.Header>
        <S.RowWrapper>
          <S.Text>강사 : </S.Text>
          <S.LecturerInput
            placeholder="이름을 입력해주세요."
            spellCheck="false"
          />
        </S.RowWrapper>
        <S.RowWrapper>
          <S.Text>강의 제목 : </S.Text>
          <S.LectureTitleInput
            placeholder="제목을 입력해주세요."
            spellCheck="false"
          />
        </S.RowWrapper>
        <S.RowWrapper>
          <S.Text>강의 이미지 : </S.Text>
          <S.Upload type="file" />
        </S.RowWrapper>
        <S.RowWrapper>
          <S.Text>강의 미리보기 : </S.Text>
          <S.Upload type="file" />
        </S.RowWrapper>
        <S.RowWrapper>
          <S.Text>강의 개수 : </S.Text>
          <S.LectureCountInput
            placeholder="강의 개수를 입력해주세요."
            spellCheck="false"
            value={props.lectureCount}
            onChange={props.onChangeLectureCount}
          />
          <S.LectureCount onClick={props.onClickLectureMake}>
            확인
          </S.LectureCount>
        </S.RowWrapper>
      </S.Header>
      <S.Body>
        <S.RowWrapper>
          <S.Text>설명 : </S.Text>
          <S.DescriptionArea />
        </S.RowWrapper>
      </S.Body>
      {list}
    </S.Contents>
  );
}
