import axios from "axios";

// 새로운 악보를 생성하는 API
const createMusic = async (formDataToSend) => {
  try {
    const serverResponse = await axios.post(
      // "${process.env.REACT_APP_HOST_URL}/church+/music/create",
      `${process.env.REACT_APP_HOST_URL}/church+/music/create`,
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // 서버로부터의 응답 처리
    console.log("악보가 정상적으로 추가되었음", serverResponse);

    return serverResponse.data; //서버에서 반환한 데이터를 반환할 수 있음
  } catch (error) {
    // 서버 통신 중 에러 처리
    console.error("악보 추가 실패:", error);
    throw error; // 에러를 상위 컴포넌트로 전파하거나 다른 처리를 할 수 있음
  }
};

export default createMusic;
