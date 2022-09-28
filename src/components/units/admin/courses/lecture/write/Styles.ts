import styled from "@emotion/styled";
import { Spin, Alert } from "antd";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { SearchOutlined } from "@ant-design/icons";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export const Contents = styled.form`
  width: 100%;
  margin: 0 40px;
  padding-bottom: 80px;
`;

export const ContentsTitle = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e4e4e4;
`;

export const HeaderWrapper = styled.div`
  padding: 30px 0;
  border-bottom: 2px solid #e4e4e4;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding: 20px 0 20px 40px;
  width: 80%;
`;
export const Lecture = styled.div`
  padding-bottom: 80px;
  border-bottom: 2px solid #e4e4e4;
`;

export const LectureTitle = styled.div`
  font-size: 30px;
`;

export const Mid = styled.div`
  padding-bottom: 40px;
  border-bottom: 2px solid #e4e4e4;
`;

export const Body = styled.div`
  padding-bottom: 40px;
  border-bottom: 2px solid #e4e4e4;
`;

export const RowWrapper = styled.div`
  width: 100%;
  padding: 30px 40px 10px 40px;
  display: flex;
  color: #595959;
`;

export const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const LecturerInput = styled.input`
  margin-left: 20px;
  width: 300px;
  font-size: 18px;
  border: none;
  :focus {
    outline: none;
  }
`;

export const LectureTitleInput = styled.input`
  margin-left: 20px;
  width: 600px;
  font-size: 18px;
  border: none;
  :focus {
    outline: none;
  }
`;

export const Upload = styled.input`
  margin-left: 20px;
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  width: 100%;
  font-size: 18px;
  border-bottom: 1px solid #e4e4e4;
`;

export const LectureCountInput = styled.input`
  margin-left: 20px;
  width: 200px;
  font-size: 18px;
  border: none;
  :focus {
    outline: none;
  }
`;

export const LectureCount = styled.button`
  font-weight: bold;
  padding: 6px 20px;
  margin-left: 20px;
  border-radius: 10px;
  border: 1px solid #427ed1;
  color: white;
  background-color: #427ed1;
  :hover {
    background-color: white;
    color: black;
  }
`;

export const WriteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 100%;
`;

export const WriteBtn = styled.button`
  font-weight: bold;
  padding: 10px 100px;
  margin-left: 20px;
  border-radius: 10px;
  border: 1px solid #427ed1;
  color: white;
  background-color: #427ed1;
  :disabled {
    color: black;
    background-color: white;
  }
  :hover {
    color: black;
    background-color: white;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Loading = styled(Spin)`
  margin-top: 50px;
`;

export const AlertMessage = styled(Alert)`
  padding: 100px 200px 200px 200px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Err = styled.div`
  display: flex;
  align-items: center;
  color: red;
  font-weight: bold;
  margin-left: 40px;
`;

export const Select = styled.select`
  margin: 0 20px;
  padding: 0 20px;
  :focus {
    outline: none;
  }
`;

export const TextArea = styled(ReactQuill)`
  margin-left: 20px;
  margin-bottom: 30px;
  padding-bottom: 50px;
  height: 200px;
  width: 70%;
`;

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadioName = styled.div`
  padding: 0 20px;
`;

export const Radio = styled.input``;

export const SearchWrapper = styled.div`
  width: 20%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #eaeaea;
  border-radius: 30px;
  margin: 20px 0 0 40px;
`;

export const SearchIcon = styled(SearchOutlined)`
  width: 20%;
  cursor: pointer;
  color: #2b2e32;
  font-size: 20px;
`;

export const SearchInput = styled.input`
  width: 70%;
  margin-right: 10%;
  border: none;
  :focus {
    outline: none;
  }
`;
