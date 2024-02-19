import React from "react";
import Logo from "../../assets/Logos/loginLogo1.svg";
import googleIcons from "../../assets/Icons/google.svg";
import styled from "styled-components";
import background from "../../assets/bgImg/LoginBgImg.png";

const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ChurchPlusLogo = styled.div`
  padding-top: 8rem;
  img {
    height: 180px;
  }
`;

const Description = styled.div`
  padding-top: 0.5rem;
  font-size: 29px;
`;

const LoginBtn = styled.button`
  margin-top: 13rem;
  font-size: 30px;
  font-weight: 100;
  width: 415px;
  height: 70px;
  border: none;
  border-radius: 38px;
  background-color: rgba(232, 232, 239, 0.5);
  text-align: left;

  cursor: pointer;
  img {
    height: 35px;
    padding: 0rem 0.8rem;
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

      <Description>
        주차별 악보 관리부터 콘티 생성까지 <br></br>
        Church+로 손쉽게 해결하세요!
      </Description>

      <LoginBtn onClick={handleLogin}>
        <img src={googleIcons} alt="구글 로고" />
        <span>Google 계정으로 시작하기</span>
      </LoginBtn>
    </Wrapper>
  );
};

export default GoogleLogin;
