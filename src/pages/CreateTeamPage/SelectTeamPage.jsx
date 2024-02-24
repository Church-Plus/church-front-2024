import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FirstTeam from "../../assets/groupImg/1.svg";
import CreateTeam from "../../assets/commonStyle/CreateTeam.svg";
import CreateTeamHover from "../../assets/commonStyle/CreateTeamHover.svg";
import starting from "../../assets/commonStyle/Starting.svg";
import startingHover from "../../assets/commonStyle/startingHover.svg";
import alreadyHaveTeam from "../../assets/commonStyle/AlreadyHaveTeam.svg";
import alreadyHaveTeamHover from "../../assets/commonStyle/AlreadyHaveTeamHover.svg";
import SelectTeamCLogo from "../../assets/Logos/SelectTeamC+_Logo.svg";
import ChoseYourTeam from "../../assets/Logos/ChoseYourTeam..svg";
import { Link } from "react-router-dom";
import axios from "axios";

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
  width: 243px;
  height: 98px;
  margin-top: 61px;
`;

const ChoseTeam = styled.img`
  width: 498px;
  height: 56px;
  margin-top: 22px;
`;

const SelectTeamContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Teams = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreateTeamIcon = styled.img`
  width: 210px;
  height: 244px;
  &:hover {
    content: url(${CreateTeamHover});
  }
`;

const CreateTeamText = styled.div`
  font-size: 29px;
  text-align: center;
  font-weight: 600;
`;

const YourTeam = styled.img`
  width: 210px;
  height: 244px;
  margin-right: 145px;
  cursor: pointer;
`;
const YourTeamText = styled.div`
  font-size: 29px;
  text-align: center;
  font-weight: 600;
  margin-right: 145px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const Starting = styled.img`
  width: 132px;
  height: 46px;
  margin-top: 56px;
  margin-left: 584px;
  &:hover {
    content: url(${startingHover});
  }
`;

const AlreadyHaveTeam = styled.img`
  width: 162px;
  height: 22px;
  margin-top: 88px;
  margin-left: 424px;
  &:hover {
    content: url(${alreadyHaveTeamHover});
  }
`;

function SelectTeamPage() {
  const [groups, setgroups] = useState([]);
  const memberId = localStorage.getItem("memberId");
  const [selecteGroup, setSelecteGroup] = useState();
  const fetchData = async () => {
    try {
      const serverResponse = await axios.get(
        // `${process.env.REACT_APP_HOST_URL}/church+/folder/list/${month}`
        `${process.env.REACT_APP_HOST_URL}/church+/group/list/${memberId}`
      );
      setgroups(serverResponse.data.groups);
      console.log(groups);
      console.log("serverResponse:", serverResponse);
    } catch (error) {
      console.error("그룹 불러오기 실패:", error);
      setgroups([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [memberId]);

  const handleTeamClick = (group) => {
    setSelecteGroup(group.groupId);
    // alert(`${group.groupName}팀을 선택하셨습니다.`);
    localStorage.setItem("groupId", group.groupId);
  };

  return (
    <TeamPageContainer>
      <LogoContainer>
        <CLogo src={SelectTeamCLogo} alt="팀 로고" />
        <ChoseTeam src={ChoseYourTeam} alt="팀을 선택하세요." />
      </LogoContainer>
      <SelectTeamContainer>
        <TeamContainer>
          {groups.map((group, index) => (
            <div key={index}>
              <Teams>
                <Link to={"/main"}>
                <YourTeam
                  src={FirstTeam}
                  alt=" 첫번째 팀"
                  onClick={() => handleTeamClick(group)}
                />
                </Link>
                <YourTeamText>{group.groupName}</YourTeamText>
              </Teams>
            </div>
          ))}

          <Teams>
            <Link to={"/CreateTeam"}>
              <CreateTeamIcon src={CreateTeam} alt="팀 생성" />
            </Link>
            <CreateTeamText>팀 생성</CreateTeamText>
          </Teams>
        </TeamContainer>
      </SelectTeamContainer>
      <Buttons>
        <Link to={`/main`}>
          <Starting src={starting} alt="시작하기" />
        </Link>
        <AlreadyHaveTeam src={alreadyHaveTeam} alt="이미 팀이 있으신가요?" />
      </Buttons>
    </TeamPageContainer>
  );
}

export default SelectTeamPage;
