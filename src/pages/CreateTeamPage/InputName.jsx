import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import nextBtn from "../../assets/commonStyle/NextButton.svg";
import nextBtnHover from "../../assets/commonStyle/NextButtonHover.svg";

const Wrapper = styled.div``;

const TopNoticeBars = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 4.5rem;
`;

const Bar = styled.div`
  width: 27%;
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
  display: flex;
  justify-content: center;

  input {
    margin-top: 3rem;
    padding-left: 2.4rem;
    height: 100px;
    width: 81%;
    border-radius: 24px;
    border: none;
    outline: none;
    font-size: 40px;
    caret-color: blue;

    background-color: #efeff0;

    &:focus {
      background-color: white;
      border: 1px solid black;
    }
  }
`;

const Text = styled.div`
  padding-left: 8.5%;
  padding-top: 15%;
  font-size: 40px;
`;

const Btn = styled.div`
  margin-top: 11%;
  text-align: center;

  img {
    height: 59px;
    cursor: pointer;
  }

  img:hover {
    content: url(${nextBtnHover});
  }
`;

function InputName() {
  const [userName, setUserName] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  const handleNextBtnClick = async () => {
    if (userName.trim() !== "") {
      navigate("/CreatePosition", {
        state: { userName, teamName: location.state.teamName },
      });
    } else {
      alert("유저 이름을 입력하세요.");
    }
  };

  return (
    <Wrapper>
      <TopNoticeBars>
        <Bar />
        <Bar $now />
        <Bar />
      </TopNoticeBars>
      <Text>이름을 입력해주세요.</Text>
      <TextBox>
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
