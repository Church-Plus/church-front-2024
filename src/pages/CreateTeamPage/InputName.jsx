import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import nextBtn from "../../assets/commonStyle/NextButton.svg";

const Wrapper = styled.div``;

const TopNoticeBars = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4.5rem;
`;

const Bar = styled.div`
  width: 380px;
  height: 5px;
  background-color: #efeff0;
  margin-right: 1rem;
  border-radius: 30px;

  ${(props) =>
    props.$now &&
    css`
      background-color: #8248f2;
    `}
`;

const TextBox = styled.div`
  padding-left: 8.5rem;
  padding-top: 7rem;

  input {
    margin-top: 3rem;
    padding-left: 2.4rem;
    height: 100px;
    width: 80vw;
    border-radius: 24px;
    border: none;
    outline: none;
    font-size: 40px;

    background-color: #efeff0;
  }
`;

const Text = styled.div`
  margin-top: 6.5rem;
  font-size: 40px;
`;

const Btn = styled.div`
  margin-top: 10rem;
  text-align: center;

  img {
    height: 59px;
    cursor: pointer;
  }
`;

function InputName() {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const handleNextBtnClick = () => {
    navigate("/CreatePosition");
  };

  return (
    <Wrapper>
      <TopNoticeBars>
        <Bar />
        <Bar $now />
        <Bar />
      </TopNoticeBars>
      <TextBox>
        <Text>이름을 입력해주세요.</Text>
        <input
          type="text"
          autoFocus
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </TextBox>
      <Btn>
        <img onClick={handleNextBtnClick} src={nextBtn} alt="다음 버튼" />
      </Btn>
    </Wrapper>
  );
}

export default InputName;
