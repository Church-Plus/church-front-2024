import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import nextBtn from "../../assets/commonStyle/NextButton.svg";
import nextBtnHover from "../../assets/commonStyle/NextButtonHover.svg";
import askTeam from "../../assets/commonStyle/AlreadyHaveTeam.svg";

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

const AskTeam = styled.img`
  height: 20px;
  float: right;
  margin-right: 10%;
  cursor: pointer;
`;

function InputTeamName() {
  const [teamName, setTeamName] = useState("");
  const navigate = useNavigate();

  const handleNextBtnClick = async () => {
    if (teamName.trim() !== "") {
      navigate("/CreateName", { state: { teamName } });
    } else {
      alert("팀 이름을 입력하세요.");
    }
  };

  return (
    <Wrapper>
      <TopNoticeBars>
        <Bar $now />
        <Bar />
        <Bar />
      </TopNoticeBars>
      <Text>팀명을 입력해주세요.</Text>
      <TextBox>
        <input
          type="text"
          autoFocus
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </TextBox>
      <Btn>
        <img onClick={handleNextBtnClick} src={nextBtn} alt="다음 버튼" />
      </Btn>
      <AskTeam src={askTeam} alt="이미 팀이 있으신가요?" />
    </Wrapper>
  );
}

export default InputTeamName;
