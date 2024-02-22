import React, { useEffect } from "react";
import sendAccessTokenToBackend from "../../apis/sendAccessTokenToBackend";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginLoding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-top: 100px;
`;

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // accessToken 추출
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");

    // accessToken이 존재하면 백엔드로 전송하고 페이지 이동
    if (accessToken) {
      sendAccessTokenToBackend(accessToken).then(() => {
        navigate("/SelectTeam"); // 로그인 후 팀생성 페이지 이동
      });
    }
  }, [navigate]);

  return (
    <div>
      <LoginLoding>로그인 중입니다...</LoginLoding>
    </div>
  );
};

export default Loading;
