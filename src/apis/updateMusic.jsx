import axios from "axios";

// 새로운 악보를 생성하는 API
const updateMusic = async (formDataToSend, path) => {
  try {
    const serverResponse = await axios.patch(
      // "${process.env.REACT_APP_HOST_URL}//church+/music/{{musicId}}",
      `${process.env.REACT_APP_HOST_URL}/church+/music/${path}`,
      formDataToSend,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // 서버로부터의 응답 처리
    console.log("악보가 정상적으로 수정되었음", serverResponse);

    return serverResponse.data; //서버에서 반환한 데이터를 반환할 수 있음
  } catch (error) {
    // 서버 통신 중 에러 처리
    console.error("악보 수정 실패:", error);

    console.log("formDataToSend:", formDataToSend);

    throw error; // 에러를 상위 컴포넌트로 전파하거나 다른 처리를 할 수 있음
  }
};

export default updateMusic;
