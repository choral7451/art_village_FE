import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Spin, Alert } from "antd";

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

export const RowWrapper = styled.div`
  width: 100%;
  padding: 30px 40px 10px 40px;
  display: flex;
  color: #595959;
`;

export const LectureTitle = styled.div`
  font-size: 30px;
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

export const Upload = styled.input`
  margin-left: 20px;
  cursor: pointer;
`;

export const TextArea = styled(ReactQuill)`
  margin-left: 20px;
  margin-bottom: 30px;
  height: 200px;
  width: 70%;
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

export const Err = styled.div`
  display: flex;
  align-items: center;
  color: red;
  font-weight: bold;
  margin-left: 40px;
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
