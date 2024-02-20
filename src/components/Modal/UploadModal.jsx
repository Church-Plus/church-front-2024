import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { AddBtn } from "../Common/Common";
import addIcon from "../../assets/Icons/add.svg";
import XButton from "../../assets/Icons/XButton.svg";
import addMusicSheet from "../../assets/Icons/addMusicSheet.svg";
import UploadModalSelectDropdown from "./UploadModalSelectDropdown";

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
  width: 923px;
  height: 710px;
  background-color: #e8e8ef;
  border: none;
  border-radius: 40px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeader = styled.div`
  margin-bottom: 16px;
  padding-bottom: 4px;
  display: flex;
  justify-content: flex-end;
  width: 880px;
  margin-top: 30px;
  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  img:hover {
    opacity: 0.8;
  }
`;

const ModalBody = styled.div`
  width: 798px;
  height: 462px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const LeftBody = styled.div`
  width: 348px;
  height: 476px;
  border-radius: 40px;
  background-color: rgba(99, 93, 144, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`;

const RightBody = styled.div`
  width: 380px;
  height: 440px;
  border-radius: 33px;
  /* border: 1px solid red; */
`;
const SongTitle = styled.input`
  && {
    font-size: 23px;
    padding-left: 30px;
    margin-bottom: 20px;
    background-color: #efeff0;
    width: 346px;
    height: 45px;
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
    font-size: 23px;
    padding-left: 30px;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #efeff0;
    width: 346px;
    height: 45px;
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
    font-size: 23px;
    padding-left: 25px;
    margin-bottom: 20px;
    background-color: #efeff0;
    width: 350px;
    height: 190px;
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
    margin-top: 58px;
    border: 1px solid #8248f2;
    border-radius: 40px;
    width: 98px;
    height: 49px;
    font-size: 25px;
    font-weight: 400;
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
  const [uploadModal, setUploadModal] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    videoLink: "",
    songCode: "",
    notice: "",
  });
  const fileInputRef = useRef(null);

  const toggleUploadModal = () => {
    setUploadModal((prevState) => !prevState);
    setFormData("");
  };

  const handleLeftBodyClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 기본 Enter 동작 방지
      setFormData((prevState) => ({
        ...prevState,
        notice: prevState.notice + "\n", // 줄바꿈 추가
      }));
    }
  };

  const handleInputChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = () => {
    toggleUploadModal();
  };

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
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                />
              </LeftBody>
              <RightBody>
                <SongTitle placeholder="곡제목" />
                <UploadModalSelectDropdown
                  placeholder={"시작 코드"}
                  onChange={handleInputChange}
                ></UploadModalSelectDropdown>
                <VideoLink placeholder="영상링크" />

                <Notice type="textarea" placeholder="메모"></Notice>
              </RightBody>
            </ModalBody>
            <SubmitButton onClick={toggleUploadModal}>저장</SubmitButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
