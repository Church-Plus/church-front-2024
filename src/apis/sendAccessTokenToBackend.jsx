import axios from "axios";

// API 요청을 보내는 함수 정의
const sendAccessTokenToBackend = async (accessToken) => {
  try {
    const serverResponse = await axios.post(
      "http://localhost:8080/church+/member/login",
      {}, // 요청 바디가 없는 경우 빈 객체 전달
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    // 서버로부터의 응답 처리
    console.log("Login successful with server response:", serverResponse);

    // memberId를 로컬 스토리지에 저장
    localStorage.setItem("memberId", serverResponse.data.memberId);

    return serverResponse.data; //서버에서 반환한 데이터를 반환할 수 있음
  } catch (error) {
    // 서버 통신 중 에러 처리
    console.error("Login failed with error:", error);
    throw error; // 에러를 상위 컴포넌트로 전파하거나 다른 처리를 할 수 있음
  }
};

export default sendAccessTokenToBackend;
