import * as S from "./Styles";
import { IAdminCourseWriteUI } from "./Types";
import { v4 as uuidv4 } from "uuid";

export default function AdminCourseWriteUI(props: IAdminCourseWriteUI) {
  const category = props.category?.map((el) => {
    return (
      <option key={uuidv4()} value={el.name}>
        {el.name}
      </option>
    );
  });

  const subCategory = props.subCategoryArr?.map((el) => {
    return (
      <option key={uuidv4()} value={el.name}>
        {el.name}
      </option>
    );
  });

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
            <S.Upload type="file" {...props.register(`file${i + 1}`)} />
          </S.RowWrapper>
        </S.Body>
      );
    }
  }

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
        onSubmit={props.handleSubmit(props.submitWrite)}
        style={props.loading ? { display: "none" } : { display: "initial" }}
      >
        <S.ContentsTitle>
          <S.Title>강의 등록</S.Title>
        </S.ContentsTitle>
        <S.Header>
          <S.RowWrapper>
            <S.Text>강사 : </S.Text>
            <S.LecturerInput
              placeholder="이름을 입력해주세요."
              spellCheck="false"
              {...props.register("lecturer")}
            />
          </S.RowWrapper>
          <S.Err>{props.formState.errors.name?.message}</S.Err>
          <S.RowWrapper>
            <S.Text>강의 제목 : </S.Text>
            <S.LectureTitleInput
              placeholder="제목을 입력해주세요."
              spellCheck="false"
              {...props.register("title")}
            />
          </S.RowWrapper>
          <S.Err>{props.formState.errors.title?.message}</S.Err>
          <S.RowWrapper>
            <S.Text>분류 : </S.Text>
            <S.Select
              value={props.categoryValue}
              onChange={props.onChangeCategory}
            >
              <option>분류</option>
              {category}
            </S.Select>
            <S.Text>소분류 : </S.Text>
            <S.Select
              onChange={props.onChangeSubCategory}
              // value={props.subCategoryValue}
              {...props.register("subCategory")}
            >
              <option>분류</option>
              {subCategory}
            </S.Select>
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Text>강의 이미지 : </S.Text>
            <S.Upload type="file" {...props.register("image")} />
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Text>강의 미리보기 : </S.Text>
            <S.Upload type="file" {...props.register(`file0`)} />
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Text>강의 개수 : </S.Text>
            <S.LectureCountInput
              placeholder="강의 개수를 입력해주세요."
              spellCheck="false"
              value={props.lectureCount}
              onChange={props.onChangeLectureCount}
            />
            <S.LectureCount type="button" onClick={props.onClickLectureMake}>
              확인
            </S.LectureCount>
          </S.RowWrapper>
        </S.Header>
        <S.Body>
          <S.RowWrapper>
            <S.Text>설명 : </S.Text>
            <S.DescriptionArea
              {...props.register("description")}
              spellCheck="false"
            />
            <S.Err>{props.formState.errors.description?.message}</S.Err>
          </S.RowWrapper>
        </S.Body>
        {list}
        <S.WriteWrapper>
          <S.WriteBtn
            type="submit"
            disabled={!props.formState.isDirty || !props.formState.isValid}
          >
            등록
          </S.WriteBtn>
        </S.WriteWrapper>
      </S.Contents>
    </>
  );
}
