import React from "react";
import SelectTeamPageImg from "../../assets/pages/SelectTeamPage.svg";
import styled from "styled-components";
import CreateTeam from "../../assets/commonStyle/CreateTeam.svg";
import CreateTeamHover from "../../assets/commonStyle/CreateTeamHover.svg";
import starting from "../../assets/commonStyle/Starting.svg";
import startingHover from "../../assets/commonStyle/startingHover.svg";
import alreadyHaveTeam from "../../assets/commonStyle/AlreadyHaveTeam.svg";
import alreadyHaveTeamHover from "../../assets/commonStyle/AlreadyHaveTeamHover.svg";
import SelectTeamCLogo from "../../assets/Logos/SelectTeamC+_Logo.svg";
import ChoseYourTeam from "../../assets/Logos/ChoseYourTeam..svg";

import { Link } from "react-router-dom";
import { width } from "@mui/system";

const TeamPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CLogo = styled.img`
  width: 304px;
  height: 122px;
  margin-top: 76px;
`;

const ChoseTeam = styled.img`
  width: 623px;
  height: 70px;
  margin-top: 27px;
`;

const SelectTeamContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
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
  margin-top: 70px;
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
      <LogoContainer>
        <CLogo src={SelectTeamCLogo} alt="팀 로고" />
        <ChoseTeam src={ChoseYourTeam} alt="팀을 선택하세요." />
      </LogoContainer>
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
