import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import XButton from "../../assets/Icons/XButton.svg";
import EditblackPencilIcons from "../../assets/Icons/editBlackPencil.svg";
import UploadModalSelectDropdown from "./UploadModalSelectDropdown";
import UpdateMusic from "../../apis/updateMusic";

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

const ModalOpen = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  text-align: left;
  cursor: pointer;
  border: none;
  background-color: white;

  &:hover {
    background-color: #dfdfdf;
  }

  img {
    padding: 10px;
  }
`;

const ModalContent = styled.div`
  border: 1px solid red;
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 834px;
  height: 645px;
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
  width: 704px;
  height: 500px;
  display: flex;
  margin-top: 16px;
`;

const LeftBody = styled.div`
  margin-top: 30px;
  width: 309px;
  height: 422px;
  border-radius: 40px;
  background-color: rgba(99, 93, 144, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`;

const RightBody = styled.div`
  width: 400px;
  height: 450px;
  border-radius: 33px;
`;
const SongTitle = styled.input`
  && {
    font-family: "Pretendard";
    margin-top: 30px;
    font-size: 18px;
    margin-left: 38px;
    padding-left: 24px;
    margin-bottom: 16px;
    background-color: #efeff0;
    width: 339px;
    height: 44px;
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
    font-family: "Pretendard";
    font-size: 18px;
    margin-left: 38px;
    padding-left: 24px;
    margin-top: 8px;
    margin-bottom: 16px;
    background-color: #efeff0;
    width: 339px;
    height: 44px;
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
    font-family: "Pretendard";
    font-size: 18px;
    margin-left: 38px;
    padding-left: 20px;
    padding-top: 13px;
    margin-bottom: 16px;
    background-color: #efeff0;
    width: 339px;
    height: 186px;
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
    margin-top: 20px;
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

export default function UPdateFileModal({
  musicId,
  musicName,
  code,
  link,
  description,
  folderId,
  musicImageUrl,
}) {
  const [createFolderModal, setCreateFolderModal] = useState(false);
  // const [inputValue, setInputValue] = useState(musicName);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    musicName: musicName,
    code: code,
    link: link,
    description: description,
    folderId: folderId,
  });
  const fileInputRef = useRef(musicImageUrl);
  const toggleCreateFolderModal = () => {
    setCreateFolderModal((prevState) => !prevState);
    console.log(musicName, code, link, description);
  };

  useEffect(() => {
    if (createFolderModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [createFolderModal]);

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
      const path = musicId;
      const FolderId = folderId;

      const formDataToSend = new FormData();
      formDataToSend.append("musicName", musicName);
      formDataToSend.append("code", code);
      formDataToSend.append("link", link);
      formDataToSend.append("description", description);
      formDataToSend.append("folderId", FolderId);

      if (fileInputRef.current.files.length > 0) {
        formDataToSend.append("image", fileInputRef.current.files[0]);
      }
      await UpdateMusic(formDataToSend, path);

      toggleCreateFolderModal();
      window.location.reload();
    } catch (error) {
      console.error("파일 수정에 실패했습니다.:", error);
      console.log("formdata:", formData); // 수정된 폴더 이름 출력
    }
  };

  return (
    <>
      <ModalOpen onClick={toggleCreateFolderModal}>
        <img src={EditblackPencilIcons} alt="" />
        <div>수정하기</div>
      </ModalOpen>
      {createFolderModal && (
        <Modal>
          <Overlay onClick={toggleCreateFolderModal} />
          <ModalContent>
            <div>
              <ModalHeader>
                <img
                  src={XButton}
                  alt="엑스 버튼"
                  onClick={toggleCreateFolderModal}
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
                    src={musicImageUrl}
                    alt="기본 이미지"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
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
                  codeSelected={formData.code} // formData에서 코드 값 전달
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
