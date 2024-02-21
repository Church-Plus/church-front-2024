import React, { useEffect, useState } from "react";
import styled from "styled-components";
import background1 from "../../assets/bgImg/LoginBackground1.svg";
import background2 from "../../assets/bgImg/LoginBackground2.svg";
import background3 from "../../assets/bgImg/LoginBackground3.svg";
import background4 from "../../assets/bgImg/LoginBackground4.svg";
import background5 from "../../assets/bgImg/LoginBackground5.svg";
import GoogleLoginBtn from "../../assets/Icons/GoogleLogin.svg";

const backgroundArr = [
  background1,
  background2,
  background3,
  background4,
  background5,
];

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  text-align: center;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

const GoogleBtn = styled.img`
  margin-bottom: 135px;
  width: 393px;
  cursor: pointer;
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
      <GoogleBtn
        onClick={handleLogin}
        src={GoogleLoginBtn}
        alt="구글 로그인 버튼"
      />
    </Wrapper>
  );
};

export default GoogleLogin;
