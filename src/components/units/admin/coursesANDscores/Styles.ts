import styled from "@emotion/styled";

export const Contents = styled.div`
  width: 80%;
  margin: 0 40px;
  padding-bottom: 80px;
  border-bottom: 2px solid #e4e4e4;
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

export const RowWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  width: 100%;
  font-size: 18px;
  border-bottom: 1px solid #e4e4e4;
`;

export const ID = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CategoryWrapper = styled.div`
  height: 100%;
  width: 15%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Category = styled.div`
  height: 50%;
  width: 100%;
  text-align: center;
  padding: 15px;
  border-bottom: 1px solid #e4e4e4;
`;
export const SubCategory = styled.div`
  width: 100%;
  height: 50%;
  padding: 15px 0;
  text-align: center;
`;

export const ItemTitle = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  cursor: pointer;
`;

export const ItemWriter = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const Btn = styled.button`
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px;
  margin: 0 5%;
  width: 200px;
  height: fit-content;
  border: 1px solid #427ed1;
  color: white;
  background-color: #427ed1;
  :hover {
    background-color: white;
    color: black;
  }
`;
