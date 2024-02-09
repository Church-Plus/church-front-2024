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

const AddBtn = styled.button`
  height: 80px;
  background-color: #c0bed3;
  border: none;
  height: 200px;
  width: 290px;
  border-radius: 30px;

  margin-left: 60px;
  margin-top: 100px;
  cursor: pointer;

  img {
    height: 60px;
  }
`;

function Main() {
  return (
    <Wrapper>
      <Smallbox></Smallbox>
      <Box>
        <AddBtn type="submit">
          {" "}
          <img src={addIcon} alt="사진추가 아이콘" />
        </AddBtn>
      </Box>
    </Wrapper>
  );
}

export default Main;
