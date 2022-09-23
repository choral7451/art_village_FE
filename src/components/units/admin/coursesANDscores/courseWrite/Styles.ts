import styled from "@emotion/styled";

export const Contents = styled.div`
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

export const Header = styled.div`
  padding-bottom: 40px;
  border-bottom: 2px solid #e4e4e4;
`;

export const Body = styled.div`
  padding-bottom: 40px;
  border-bottom: 2px solid #e4e4e4;
`;

export const RowWrapper = styled.div`
  width: 100%;
  padding: 40px 40px 0 40px;
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

export const DescriptionArea = styled.textarea`
  margin-left: 20px;
  height: 200px;
  width: 70%;
  resize: none;
  :focus {
    outline: none;
  }
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
