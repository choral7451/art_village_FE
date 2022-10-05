import * as S from "./Unit.styles";
import { IUnitUI } from "./Unit.types";
import { v4 as uuidv4 } from "uuid";
import LecturerCard from "../../../commons/lecturerCard/Container";

export default function UnitUI(props: IUnitUI) {
  const lecture = props.data?.video.map((el) => {
    return (
      <S.Lecture key={uuidv4()} onClick={props.onChangeVideo(el.url)}>
        <S.PlayIcon />
        <S.LectureTitle>{el.title}</S.LectureTitle>
        <S.ClockIcon />
        <S.PlayTime>03:22</S.PlayTime>
      </S.Lecture>
    );
  });
  return (
    <S.Body>
      <S.VideoWrapper>
        <S.VideoContents>
          <S.VideoBorder>
            <video
              src={`https://storage.cloud.google.com/${props.video}`}
              width="100%"
              height="100%"
              controlsList="nodownload"
              onContextMenu={(e) => {
                e.preventDefault();
              }}
              controls
            ></video>
          </S.VideoBorder>
          <S.VideoDescription>
            <S.Category>
              {props.data?.category.name} {">"} {props.data?.subCategory.name}
            </S.Category>
            <S.Title>{props.data?.title}</S.Title>
            <S.subTitle>{props.subTitle}</S.subTitle>
            <S.LecturerWrapper>
              <S.LecturerIcon />
              <S.Lecturer>{props.data?.lecturer.name}</S.Lecturer>
              <S.Star value={5} disabled />
            </S.LecturerWrapper>
          </S.VideoDescription>
        </S.VideoContents>
      </S.VideoWrapper>
      <S.NavBar>
        <S.NavBtn
          style={
            props.nav === "education" ? { backgroundColor: "#eaeaea" } : {}
          }
          onClick={props.onClickNavBtn("education")}
        >
          교육과정
        </S.NavBtn>
        <S.NavBtn
          style={props.nav === "profile" ? { backgroundColor: "#eaeaea" } : {}}
          onClick={props.onClickNavBtn("profile")}
        >
          프로필
        </S.NavBtn>
        <S.NavBtn
          style={props.nav === "rate" ? { backgroundColor: "#eaeaea" } : {}}
          onClick={props.onClickNavBtn("rate")}
        >
          수강평(1)
        </S.NavBtn>
      </S.NavBar>
      {props.nav === "education" ? (
        <S.ContentWrapper>
          <S.LectureTitleText>교육과정</S.LectureTitleText>
          <S.List>
            <S.InfoWrapper>
              목록<S.LectureInfo>25 강의 4시간19분</S.LectureInfo>
            </S.InfoWrapper>
            {lecture}
          </S.List>
        </S.ContentWrapper>
      ) : null}
      {props.nav === "profile" ? (
        <S.ProfileWrapper>
          <S.TitleWrapper>
            <S.LectureTitleText>프로필</S.LectureTitleText>
          </S.TitleWrapper>
          <LecturerCard type="basic" data={props.data.lecturer} />
        </S.ProfileWrapper>
      ) : null}
      {props.nav === "rate" ? (
        <S.RateWrapper>
          <S.TitleWrapper>
            <S.LectureTitleText>수강평</S.LectureTitleText>
          </S.TitleWrapper>
          <S.RateContentWrapper>
            <S.RateContentHeader>
              <S.RateContentName>임성준</S.RateContentName>
              <S.RateContentDate>2022-09-30 16:30:21</S.RateContentDate>
            </S.RateContentHeader>
            <S.RateBody>
              <S.RateContent>
                asdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdasasdassdas
              </S.RateContent>
              <S.Star value={5} />
            </S.RateBody>
          </S.RateContentWrapper>
          <S.RateWriteWrapper
            onSubmit={props.handleSubmit(props.onClickReview)}
          >
            <S.RateWriteArea
              placeholder="수강평을 입력해주세요."
              spellCheck={false}
              {...props.register("review")}
            />
            <S.RateButtonWrapper>
              <S.RateButtonText>평 점</S.RateButtonText>
              <S.Star onChange={props.onClickStar} />
              <S.RegisterBtn type="submit">등 록</S.RegisterBtn>
            </S.RateButtonWrapper>
          </S.RateWriteWrapper>
        </S.RateWrapper>
      ) : null}
    </S.Body>
  );
}
