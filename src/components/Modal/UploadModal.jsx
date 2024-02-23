import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { AddBtn } from "../Common/Common";
import addIcon from "../../assets/Icons/add.svg";
import XButton from "../../assets/Icons/XButton.svg";
import addMusicSheet from "../../assets/Icons/addMusicSheet.svg";
import UploadModalSelectDropdown from "./UploadModalSelectDropdown";
import createMusic from "../../apis/createMusic";
import { useParams } from "react-router-dom";

const modalStyles = `
  width: 100vw;
  height: 100vh;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Modal = styled.div`
  ${modalStyles}
  z-index: 3;
`;

const Overlay = styled.div`
  ${modalStyles}
  background: rgba(166, 166, 170, 0.8);
`;
const ModalContent = styled.div`
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 738px;
  height: 568px;
  background-color: #e8e8ef;
  border: none;
  border-radius: 40px;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeader = styled.div`
  margin-bottom: 13px;
  padding-bottom: 3px;
  display: flex;
  justify-content: flex-end;
  width: 704px;
  margin-top: 24px;
  img {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }

  img:hover {
    opacity: 0.8;
  }
`;

const ModalBody = styled.div`
  width: 639px;
  height: 370px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const LeftBody = styled.div`
  width: 278px;
  height: 381px;
  border-radius: 40px;
  background-color: rgba(99, 93, 144, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`;

const RightBody = styled.div`
  width: 305px;
  height: 352px;
  border-radius: 33px;
  /* border: 1px solid red; */
`;
const SongTitle = styled.input`
  && {
    font-size: 18px;
    padding-left: 24px;
    margin-bottom: 16px;
    background-color: #efeff0;
    width: 277px;
    height: 36px;
    border: 1px solid #c1c1c1;
    border-radius: 16px;
    &.MuiInput-underline {
      &::before,
      &::after {
        border-bottom: none;
      }
      &:hover::before {
        border-bottom: none;
      }
    }
    &::placeholder {
      color: #555555;
      font-weight: 100;
    }
  }
`;
const VideoLink = styled.input`
  && {
    font-size: 18px;
    padding-left: 24px;
    margin-top: 8px;
    margin-bottom: 16px;
    background-color: #efeff0;
    width: 277px;
    height: 36px;
    border: 1px solid #c1c1c1;
    border-radius: 16px;
    &.MuiInput-underline {
      &::before,
      &::after {
        border-bottom: none;
      }
      &:hover::before {
        border-bottom: none;
      }
    }
    &::placeholder {
      color: #555555;
      font-weight: 100;
    }
  }
`;
const Notice = styled.input`
  && {
    font-size: 18px;
    padding-left: 20px;
    margin-bottom: 16px;
    background-color: #efeff0;
    width: 280px;
    height: 152px;
    border: 1px solid #c1c1c1;
    border-radius: 16px;
    &.MuiInput-underline {
      &::before,
      &::after {
        border-bottom: none;
      }
      &:hover::before {
        border-bottom: none;
      }
    }
    &::placeholder {
      color: #555555;
      font-weight: 100;
    }
  }
`;
const SubmitButton = styled.button`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 46px;
    border: 1px solid #8248f2;
    border-radius: 40px;
    width: 78px;
    height: 39px;
    font-size: 20px;
    font-weight: 320px;
    color: #8248f2;
    background-color: #efeff0;
    cursor: pointer;
  }

  &.MuiButton-root {
    .MuiButton-label {
      transition: none;
    }
  }

  &:hover {
    background-color: #8248f2;
    color: white;
    border: none;
  }
`;

export default function UploadModal() {
  const { month } = useParams();
  const { content } = useParams();
  const [uploadModal, setUploadModal] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    musicName: "",
    code: "",
    link: "",
    description: "",
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (uploadModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [uploadModal]);

  const toggleUploadModal = () => {
    setUploadModal((prevState) => !prevState);
    setFormData({
      musicName: "",
      code: "",
      link: "",
      description: "",
    });
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Clear file input
    }
  };

  const handleLeftBodyClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
      //사용자가 업로드한 이미지 확인
      console.log("Uploaded image:", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    console.log(`${name}: ${value}`);
  };

  const handleSubmit = async () => {
    console.log(formData);
    try {
      const { musicName, code, link, description } = formData;
      //만일 사용자가 폴더 이름에 -를 사용할 경우 에러 발생할 수 있음
      const path = `${month}/${content}`;
      const formattedPath = path.replace("/", "-");
      const groupId = localStorage.getItem("groupId");

      const formDataToSend = new FormData();
      formDataToSend.append("musicName", musicName);
      formDataToSend.append("code", code);
      formDataToSend.append("link", link);
      formDataToSend.append("description", description);
      formDataToSend.append("groupId", groupId);
      formDataToSend.append("path", formattedPath);
      if (fileInputRef.current.files.length > 0) {
        formDataToSend.append("image", fileInputRef.current.files[0]);
      }

      // createMusic 함수 호출
      await createMusic(formDataToSend);

      toggleUploadModal();
      window.location.reload();
    } catch (error) {
      // 에러 처리
      console.error("악보 추가 실패:", error);
      // 에러 상태에 따라 사용자에게 알림을 제공하는 등의 추가 작업 수행 가능
    }
  };

  console.log(formData);

  return (
    <>
      <AddBtn onClick={toggleUploadModal}>
        <img src={addIcon} alt="사진추가 아이콘" />
      </AddBtn>
      {uploadModal && (
        <Modal>
          <Overlay onClick={toggleUploadModal} />
          <ModalContent>
            <div>
              <ModalHeader>
                <img
                  src={XButton}
                  alt="엑스 버튼"
                  onClick={toggleUploadModal}
                ></img>
              </ModalHeader>
            </div>
            <ModalBody>
              <LeftBody onClick={handleLeftBodyClick}>
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Uploaded"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img
                    src={addMusicSheet}
                    alt="악보추가 이미지"
                    border="0"
                  ></img>
                )}
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                  ref={fileInputRef}
                />
              </LeftBody>
              <RightBody>
                <SongTitle
                  placeholder="곡제목"
                  value={formData.musicName}
                  onChange={handleInputChange}
                  name="musicName"
                />
                <UploadModalSelectDropdown
                  placeholder={"시작 코드"}
                  value={formData.code}
                  onChange={handleInputChange}
                  name="code"
                />
                <VideoLink
                  placeholder="영상링크"
                  value={formData.link}
                  onChange={handleInputChange}
                  name="link"
                />
                <Notice
                  type="textarea"
                  placeholder="메모"
                  value={formData.description}
                  onChange={handleInputChange}
                  name="description"
                />
              </RightBody>
            </ModalBody>
            <SubmitButton onClick={handleSubmit}>저장</SubmitButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
