import React, { useState } from "react";
import styled, { css } from "styled-components";
import { NextStepBtn } from "../../components/Common/CreateTeamButton";
import { Link } from "react-router-dom";

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
  padding-top: 8rem;

  input {
    margin-top: 2rem;
    padding-left: 1rem;
    height: 70px;
    width: 1150px;
    border-radius: 15px;
    border: none;
    outline: none;
    font-size: 30px;

    background-color: #efeff0;
  }
`;

const Text = styled.div`
  margin-top: 5rem;
  font-size: 40px;
`;

const Btn = styled.div`
  margin-top: 10rem;
  text-align: center;
`;

const AskTeam = styled.div`
  text-align: right;
  font-size: 20px;
  text-decoration: underline;
  text-decoration-color: #555555;
  text-decoration-thickness: 0.7px;
  color: #555555;

  margin-top: 4rem;
  margin-right: 5rem;
  cursor: pointer;
`;

function InputTeamName() {
  const [teamName, setTeamName] = useState("");

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
        <NextStepBtn>
          <Link
            to={"/CreateName"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            다음
          </Link>
        </NextStepBtn>
      </Btn>
      <AskTeam>이미 팀이 있으신가요?</AskTeam>
    </Wrapper>
  );
}

export default InputTeamName;
