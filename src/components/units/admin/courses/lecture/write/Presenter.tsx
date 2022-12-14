import * as S from "./Styles";
import { IAdminCourseWriteUI } from "./Types";
import { v4 as uuidv4 } from "uuid";
import LecturerCard from "../../../../../commons/lecturerCard/Container";
import Tag from "../../../../../commons/tag/Container";

export default function AdminCourseWriteUI(props: IAdminCourseWriteUI) {
  const tag = props.tagArr.map((el) => {
    return (
      <Tag
        key={uuidv4()}
        text={el}
        type={"delete"}
        click={props.onClickTagDelete}
      />
    );
  });

  const lecturer = props.lecturerInfo.map((el) => {
    return (
      <LecturerCard
        key={uuidv4()}
        data={el}
        type="select"
        change={props.onChangeSelect}
        check={props.selectNum}
      />
    );
  });

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
              {...props.register(`subTitle${i + 1}`)}
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
        <S.HeaderWrapper>
          <S.SearchWrapper>
            <S.SearchIcon onClick={props.onClickSearch} />
            <S.SearchInput
              placeholder="강사이름을 입력해주세요."
              onChange={props.onChangeSearchValue}
            />
          </S.SearchWrapper>
          {props.search ? lecturer : null}
        </S.HeaderWrapper>
        <S.Mid>
          <S.RowWrapper>
            <S.Text>강의 제목 : </S.Text>
            <S.LectureTitleInput
              placeholder="제목을 입력해주세요."
              spellCheck="false"
              {...props.register("title")}
            />
          </S.RowWrapper>
          <S.Err>{props.errors.title?.message}</S.Err>
          <S.RowWrapper>
            <S.Text>분류 : </S.Text>
            <S.Select
              value={props.categoryValue}
              onChange={props.onChangeCategory}
              className="category"
            >
              <option>분류</option>
              {category}
            </S.Select>
            <S.Text>소분류 : </S.Text>
            <S.Select
              value={props.subCategoryValue}
              onChange={props.onChangeCategory}
              className="subCategory"
            >
              <option>분류</option>
              {subCategory}
            </S.Select>
            <S.Err>{props.errors.subCategory?.message}</S.Err>
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Text>강의 이미지 : </S.Text>
            <S.Upload type="file" {...props.register("image")} />
          </S.RowWrapper>
          <S.Err>{props.errors.image?.message}</S.Err>
          <S.RowWrapper>
            <S.Text>강의 소개 : </S.Text>
            <S.Upload type="file" {...props.register(`file0`)} />
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Text>태그 : </S.Text>
            <S.LectureCountInput
              placeholder="태그를 입력해주세요."
              spellCheck="false"
              onChange={props.onChangeTag}
              value={props.tagInput}
            />
            <S.LectureCount
              type="button"
              onClick={props.onClickTag}
              style={{ marginRight: "30px" }}
            >
              확인
            </S.LectureCount>
            {props.tagArr.length >= 0 ? tag : null}
          </S.RowWrapper>
          <S.Err>{props.errors.file0?.message}</S.Err>
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
        </S.Mid>
        <S.Body>
          <S.RowWrapper>
            <S.Text>설명 : </S.Text>
            <S.TextArea
              onChange={props.onChangeTextArea}
              modules={props.modules}
            />
          </S.RowWrapper>
          <S.Err>{props.errors.description?.message}</S.Err>
        </S.Body>
        {list}
        <S.WriteWrapper>
          <S.WriteBtn disabled={!props.isValid || !(props.selectNum !== "")}>
            등록
          </S.WriteBtn>
        </S.WriteWrapper>
      </S.Contents>
    </>
  );
}
