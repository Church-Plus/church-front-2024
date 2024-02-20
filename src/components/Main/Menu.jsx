import React from "react";
import styled from "styled-components";
import profileIcon from "../../assets/Icons/user.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: none;
  width: 350px;
  border-right: 2px solid rgba(198, 196, 216, 0.1);
`;

const ProfileIcon = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 60px;
  padding-bottom: 12px;

  img {
    height: 7.5rem;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  padding-bottom: 28px;
`;

function Menu() {
  return (
    <Wrapper>
      <ProfileIcon>
        <img src={profileIcon} alt="프로파일 아이콘" />
      </ProfileIcon>
      <Profile>김교회 | 인도자</Profile>
    </Wrapper>
  );
}

export default Menu;
