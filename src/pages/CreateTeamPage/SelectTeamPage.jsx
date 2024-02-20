import React from "react";
import SelectTeamPageImg from "../../assets/pages/SelectTeamPage.svg";
import styled from "styled-components";
import CreateTeam from "../../assets/commonStyle/CreateTeam.svg";
import CreateTeamHover from "../../assets/commonStyle/CreateTeamHover.svg";
import starting from "../../assets/commonStyle/Starting.svg";
import startingHover from "../../assets/commonStyle/startingHover.svg";
import alreadyHaveTeam from "../../assets/commonStyle/AlreadyHaveTeam.svg";
import alreadyHaveTeamHover from "../../assets/commonStyle/AlreadyHaveTeamHover.svg";

import { Link } from "react-router-dom";

const TeamPageStyles = `
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${SelectTeamPageImg});
  background-size: cover;
`;

const TeamPageContainer = styled.div`
  ${TeamPageStyles}
`;

const SelectTeamContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 400px;
`;

const CreateTeamIcon = styled.img`
  width: 262px;
  height: 305px;
  &:hover {
    content: url(${CreateTeamHover});
  }
`;

const CreateTeamText = styled.div`
  font-size: 36px;
  text-align: center;
  font-weight: 600;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const Starting = styled.img`
  width: 165px;
  height: 58px;
  padding-top: 70px;
  margin-left: 730px;
  &:hover {
    content: url(${startingHover});
  }
`;

const AlreadyHaveTeam = styled.img`
  width: 202px;
  height: 27px;
  margin-top: 110px;
  margin-left: 530px;
  &:hover {
    content: url(${alreadyHaveTeamHover});
  }
`;

function SelectTeamPage() {
  return (
    <TeamPageContainer>
      <SelectTeamContainer>
        <div>
          <Link to={"/CreateTeam"}>
            <CreateTeamIcon src={CreateTeam} alt="팀 생성" />
          </Link>

          <CreateTeamText>팀 생성</CreateTeamText>
        </div>
      </SelectTeamContainer>
      <Buttons>
        <Starting src={starting} alt="시작하기" />
        <AlreadyHaveTeam src={alreadyHaveTeam} alt="이미 팀이 있으신가요?" />
      </Buttons>
    </TeamPageContainer>
  );
}

export default SelectTeamPage;
