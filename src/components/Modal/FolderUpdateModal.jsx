import React, { useState, useEffect } from "react";
import styled from "styled-components";
import XButton from "../../assets/Icons/XButton.svg";
import EditPencilIcons from "../../assets/Icons/editpencil.svg";
import axios from "axios";

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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 420px;
  width: 540px;
  background-color: #e8e8ef;
  border: none;
  border-radius: 60px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const InputFolderName = styled.input`
  margin-top: 23px;
  width: 500px;
  border: none;
  outline: none;
  background-color: #e8e8ef;
  text-align: center;
  font-size: 27px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  /* margin-left: 97px; */
  img {
    margin-left: 71px;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

const Smallbox = styled.div`
  margin-top: 35px;
  margin-right: auto;
  margin-left: 120px;
  background-color: #c4c4d8;
  height: 20px;
  width: 100px;
  border-radius: 35px 35px 0px 0px;
`;

const Box = styled.div`
  height: 200px;
  width: 300px;
  border-radius: 0px 40px 40px 40px;
  background-color: #c4c4d8;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  width: 250px;
`;
const CancelButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 40px;
  font-size: 20px;

  cursor: pointer;
`;
const CreateButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 40px;
  background-color: #9f9ebc;
  color: white;
  font-size: 20px;
  border: none;

  cursor: pointer;
`;

export default function FolderUpdateModal({ folderId, folderName }) {
  const [createFolderModal, setCreateFolderModal] = useState(false);
  const [inputValue, setInputValue] = useState(folderName);

  const toggleCreateFolderModal = () => {
    setCreateFolderModal((prevState) => !prevState);
  };

  useEffect(() => {
    if (createFolderModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [createFolderModal]);

  const handleChange = (event) => {
    setInputValue(event.target.value); // 입력값을 상태에 업데이트
  };

  const handleSubmit = async () => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_HOST_URL}/church+/folder/${folderId}`,
        {
          folderName: inputValue, // 수정된 폴더 이름을 사용
        }
      );
      console.log("폴더가 성공적으로 수정되었습니다.");
      toggleCreateFolderModal();
      window.location.reload();
    } catch (error) {
      console.error("폴더 수정에 실패했습니다.:", error);
      console.log("folderName:", inputValue); // 수정된 폴더 이름 출력
    }
  };

  return (
    <>
      <ModalOpen onClick={toggleCreateFolderModal}>
        <img src={EditPencilIcons} alt="" />
        <div>수정하기</div>
      </ModalOpen>
      {createFolderModal && (
        <Modal>
          <Overlay onClick={toggleCreateFolderModal} />
          <ModalContent>
            <div>
              <InputFolderName
                type="text"
                value={inputValue}
                onChange={handleChange}
              >
                {/* <img
                  src={XButton}
                  alt="엑스 버튼"
                  onClick={toggleCreateFolderModal}
                /> */}
              </InputFolderName>
            </div>
            <Smallbox />
            <Box />
            <ButtonContainer>
              <CancelButton onClick={toggleCreateFolderModal}>
                취소
              </CancelButton>
              <CreateButton onClick={handleSubmit}>수정</CreateButton>
            </ButtonContainer>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
