import React, { useEffect, useState } from "react";
import Logo1 from "../../assets/Logos/LoginLogo1.svg";
import Logo2 from "../../assets/Logos/LoginLogo2.svg";
import Logo3 from "../../assets/Logos/LoginLogo3.svg";
import Logo4 from "../../assets/Logos/LoginLogo4.svg";
import googleIcons from "../../assets/Icons/google.svg";
import styled from "styled-components";
import background1 from "../../assets/bgImg/LoginBackground1.png";
import background2 from "../../assets/bgImg/LoginBackground2.png";
import background3 from "../../assets/bgImg/LoginBackground3.jpg";
import background4 from "../../assets/bgImg/LoginBackground4.png";

const backgroundArr = [background1, background2, background3, background4];
const logoArr = [Logo1, Logo2, Logo3, Logo4];

const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ChurchPlusLogo = styled.div`
  padding-top: 10rem;
  img {
    height: 180px;
  }
`;

const Description = styled.div`
  padding-top: 0.5rem;
  font-size: 29px;
  color: ${({ $isDarkBackground }) =>
    $isDarkBackground ? "#ffffff" : "#000000"};
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
  const [randomIndex, setRandomIndex] = useState(0);

  //인덱스 지정을 위한 난수 생성기
  useEffect(() => {
    const newIndex = Math.floor(Math.random() * backgroundArr.length);
    setRandomIndex(newIndex);
  }, []);

  //Array와 난수 생성기를 결합해서 랜덤으로 이미지를 선택하는 변수
  const backgroundImg = backgroundArr[randomIndex];
  const logoIcon = logoArr[randomIndex];
  //배경 1번을 제외한 나머지 description 색 흰색으로 통일
  const isDarkBackground = randomIndex !== 0;

  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=token
		&scope=email profile`;
  };

  return (
    <Wrapper style={{ backgroundImage: `url(${backgroundImg})` }}>
      <ChurchPlusLogo>
        <img src={logoIcon} alt="Church+ 아이콘" />
      </ChurchPlusLogo>

      <Description $isDarkBackground={isDarkBackground}>
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
