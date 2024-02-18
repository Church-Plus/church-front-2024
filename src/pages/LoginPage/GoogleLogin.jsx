import React from "react";
import Logo from "../../assets/Logos/C+_LoginLogo.svg";
import googleIcons from "../../assets/Icons/google.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const ChurchPlusLogo = styled.div`
  padding-top: 8rem;
  img {
    height: 180px;
  }
`;

const LoginBtn = styled.button`
  margin-top: 12rem;
  font-size: 35px;
  width: 500px;
  height: 80px;
  border: none;
  background-color: #e8e8ef;
  text-align: left;

  cursor: pointer;
  img {
    height: 40px;
    padding: 0rem 1.5rem;
  }

  img,
  span {
    vertical-align: middle;
  }
`;

const GoogleLogin = () => {
  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=token
		&scope=email profile`;
  };

  return (
    <Wrapper>
      <ChurchPlusLogo>
        <img src={Logo} alt="Church+ 아이콘" />
      </ChurchPlusLogo>

      <LoginBtn onClick={handleLogin}>
        <img src={googleIcons} alt="구글 로고" />
        <span>Google 계정으로 시작하기</span>
      </LoginBtn>
    </Wrapper>
  );
};

export default GoogleLogin;
