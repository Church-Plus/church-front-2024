import axios from "axios";

const getFolder = async () => {
  try {
    const serverResponse = await axios.get(
      "https://api.zionhann.shop/app/churchplus/church+/folder/list/{path}"
    );

    console.log("폴더가 정상적으로 불러와짐", serverResponse);

    return serverResponse.data;
  } catch (error) {
    console.error("폴더 추가 실패:", error);
    throw error;
  }
};

export default getFolder;
