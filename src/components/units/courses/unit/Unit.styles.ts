import styled from "@emotion/styled";
import { Rate } from "antd";
import {
  UserOutlined,
  PlayCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  width: 100%;
`;

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px 50px;
  background-color: rgb(248, 248, 248);
`;

export const VideoContents = styled.div`
  display: flex;
  width: 80%;
`;

export const VideoBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56%;
  padding: 40px 40px;
  background: linear-gradient(to bottom, #f5f2f2, #d6d2d2);
  border-radius: 20px;
`;

export const VideoDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
`;

export const Category = styled.div`
  font-size: 16px;
`;

export const Title = styled.div`
  padding-top: 20px;
  font-size: 40px;
  font-weight: bold;
`;

export const Star = styled(Rate)`
  width: 100%;
  font-size: 40px;
  padding-top: 20px;
`;

export const LecturerWrapper = styled.div`
  display: flex;
  padding-top: 30px;
`;

export const LecturerIcon = styled(UserOutlined)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const Lecturer = styled.div`
  font-size: 30px;
  padding-left: 20px;
`;

export const ContentWrapper = styled.div`
  width: 70%;
  margin-top: 10px;
  padding: 50px;
  border: 2px solid #eaeaea;
`;

export const LectureTitleText = styled.div`
  font-size: 50px;
`;

export const LectureInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const List = styled.div`
  width: 100%;
`;

export const InfoWrapper = styled.div`
  font-size: 23px;
  padding: 20px;
  font-weight: bold;
  margin: 20px 0;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 10px;
`;

export const Lecture = styled.div`
  padding: 20px;
  font-size: 25px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #f5f5f5;
  cursor: pointer;
`;

export const PlayIcon = styled(PlayCircleOutlined)`
  width: 5%;
`;
export const LectureTitle = styled.div`
  width: 80%;
`;
export const PlayTime = styled.div`
  width: 10%;
`;
export const ClockIcon = styled(ClockCircleOutlined)`
  width: 5%;
`;

export const NavBar = styled.div`
  width: 70%;
  padding: 40px 0 10px 0;
  display: flex;
`;

export const NavBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  height: 50px;
  width: 160px;
  border-radius: 15px;
  border: 2px solid #eaeaea;
  margin-right: 20px;
  :hover {
    background-color: #eaeaea;
  }
`;

export const profileImage = styled.img`
  width: 30%;
`;

export const profileText = styled.div``;
