//예라
import React from "react";
import styled from "styled-components";
import addIcon from "../../assets/Icons/add.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Smallbox = styled.div`
  margin-top: 65px;
  margin-left: 21px;
  background-color: #e8e8ef;
  height: 40px;
  width: 190px;
  border-radius: 35px 35px 0px 0px;
`;

const Box = styled.div`
  margin-left: 21px;
  height: 100%;
  width: 800px;
  border-radius: 0px 40px 0px 0px;
  background-color: #e8e8ef;
`;

const FolderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
`;

const AddBtn = styled.button`
  height: 80px;
  background-color: #c0bed3;
  border: none;
  height: 190px;
  width: 290px;
  border-radius: 30px;

  margin-left: 50px;
  margin-top: 100px;
  cursor: pointer;

  img {
    height: 60px;
  }
`;

const FolderTop = styled.div`
  background-color: #afacc7;
  border: none;
  height: 20px;
  width: 100px;
  border-radius: 28px 28px 0px 0px;

  margin-left: 50px;
  margin-top: 80px;
  cursor: pointer;
`;

const FolderBox = styled.div`
  background-color: #a4a1bf;
  border: none;
  height: 190px;
  width: 290px;
  border-radius: 0px 30px 30px 30px;

  margin-left: 50px;
  cursor: pointer;
`;

const Input = styled.div`
  padding-top: 20px;
  font-size: 18px;
  text-align: center;
`;

function Main() {
  return (
    <Wrapper>
      <Smallbox></Smallbox>
      <Box>
        <FolderContainer>
          <AddBtn type="submit">
            {" "}
            <img src={addIcon} alt="사진추가 아이콘" />
          </AddBtn>
          <div>
            <FolderTop />
            <FolderBox />
            <Input>2024년|02월|12일|총5곡</Input>
          </div>
          {/* 폴더 자동정렬 확인용 */}
          <div>
            <FolderTop />
            <FolderBox />
            <Input>2024년|02월|11일|총3곡</Input>
          </div>
          <div>
            <FolderTop />
            <FolderBox />
            <Input>2024년|01월|06일|총8곡</Input>
          </div>
        </FolderContainer>
      </Box>
    </Wrapper>
  );
}

export default Main;
