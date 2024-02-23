import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profileIcon from "../../assets/Icons/user.svg";
import axios from "axios";

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
  const [userData, setUserData] = useState([]);

  const groupId = localStorage.getItem("groupId");
  const memberId = localStorage.getItem("memberId");

  useEffect(() => {
    fetchData();
  }, [groupId, memberId]);

  const fetchData = async () => {
    try {
      const serverResponse = await axios.get(
        // `${process.env.REACT_APP_HOST_URL}/church+/group/${groupId}/${memberId}`
        `${process.env.REACT_APP_HOST_URL}/church+/group/${groupId}/${memberId}`
      );
      setUserData(serverResponse.data);
      console.log("유저 정보 불러오기 성공");
    } catch (error) {
      console.error("유저 정보 불러오기 실패:", error);
      setUserData([]);
    }
  };

  return (
    <Wrapper>
      <ProfileIcon>
        <img src={profileIcon} alt="프로파일 아이콘" />
      </ProfileIcon>
      <Profile>
        {userData.nickname}|{userData.position}
      </Profile>
    </Wrapper>
  );
}

export default Menu;
