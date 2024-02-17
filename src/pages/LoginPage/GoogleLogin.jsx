import React from "react";

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
    <div>
      <div>안녕하세요</div>
      <div>구글 계정이 있나요?</div>
      <div>
        <button onClick={handleLogin}>로그인버튼</button>
      </div>
    </div>
  );
};

export default GoogleLogin;
