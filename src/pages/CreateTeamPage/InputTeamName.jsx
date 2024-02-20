import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import nextBtn from "../../assets/commonStyle/다음 버튼.svg";
import askTeam from "../../assets/commonStyle/이미 팀이 있으신가요.svg";

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

const AskTeam = styled.img`
  height: 20px;
  float: right;
  margin-right: 8rem;
  cursor: pointer;
`;

function InputTeamName() {
  const [teamName, setTeamName] = useState("");
  const navigate = useNavigate();

  const handleNextBtnClick = () => {
    navigate("/CreateName");
  };

  return (
    <Wrapper>
      <TopNoticeBars>
        <Bar $now />
        <Bar />
        <Bar />
      </TopNoticeBars>
      <TextBox>
        <Text>팀명을 입력해주세요.</Text>
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
