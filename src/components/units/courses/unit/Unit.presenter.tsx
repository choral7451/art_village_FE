import * as S from "./Unit.styles";

export default function UnitUI() {
  return (
    <S.Body>
      {/* <S.Title>드럼 초보탈출</S.Title> */}
      <S.VideoWrapper>
        <S.VideoContents>
          <S.VideoBorder>
            <video
              src="https://storage.cloud.google.com/art_village_bucket/a.mp4"
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
            <S.Category>실용음악 {">"} 드럼</S.Category>
            <S.Title>드럼 초보탈출</S.Title>
            <S.Star value={5} />
            <S.LecturerWrapper>
              <S.LecturerIcon />
              <S.Lecturer>최성수</S.Lecturer>
            </S.LecturerWrapper>
          </S.VideoDescription>
        </S.VideoContents>
      </S.VideoWrapper>
      <S.VideoList>
        <S.LectureTitleText>교육과정</S.LectureTitleText>
        <S.List>
          <S.InfoWrapper>
            목록<S.LectureInfo>25 강의 4시간19분</S.LectureInfo>
          </S.InfoWrapper>
          <S.Lecture>
            <S.PlayIcon />
            <S.LectureTitle>1. 더블 스트록</S.LectureTitle>
            <S.ClockIcon />
            <S.PlayTime>03:22</S.PlayTime>
          </S.Lecture>
          <S.Lecture>
            <S.PlayIcon />
            <S.LectureTitle>2. 더블 스트록</S.LectureTitle>
            <S.ClockIcon />
            <S.PlayTime>03:22</S.PlayTime>
          </S.Lecture>
          <S.Lecture>
            <S.PlayIcon />
            <S.LectureTitle>3. 더블 스트록</S.LectureTitle>
            <S.ClockIcon />
            <S.PlayTime>03:22</S.PlayTime>
          </S.Lecture>
        </S.List>
      </S.VideoList>
    </S.Body>
  );
}
