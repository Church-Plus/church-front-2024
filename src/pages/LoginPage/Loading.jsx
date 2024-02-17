import React from "react";

const Loading = () => {
  // 현재 url에서 code 부분 추출
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get("access_token");
  console.log(accessToken);

  return (
    <div>
      <div>로그인, 토큰 추출중입니다...</div>
    </div>
  );
};

export default Loading;
