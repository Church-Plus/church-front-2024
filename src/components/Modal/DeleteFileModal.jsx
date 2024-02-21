import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AddBtn } from "../Common/Common";
import addIcon from "../../assets/Icons/add.svg";
import XButton from "../../assets/Icons/XButton.svg";

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

const InputFolderName = styled.div`
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
  margin-left: 97px;
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

export default function CreateFolderModal({ handleAddFolder }) {
  const [createFolderModal, setCreateFolderModal] = useState(false);
  const [folderName, setFolderName] = useState("");

  const toggleCreateFolderModal = () => {
    setCreateFolderModal((prevState) => !prevState);
    setFolderName("");
  };

  useEffect(() => {
    if (createFolderModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [createFolderModal]);

  const handleInputChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleSubmit = () => {
    handleAddFolder(folderName);
    toggleCreateFolderModal();
  };

  return (
    <>
      <AddBtn onClick={toggleCreateFolderModal}>
        <img src={addIcon} alt="사진추가 아이콘" />
      </AddBtn>
      {createFolderModal && (
        <Modal>
          <Overlay onClick={toggleCreateFolderModal} />
          <ModalContent>
            <div>
              <InputFolderName>
                폴더를 삭제하시겠습니까?
                <img
                  src={XButton}
                  alt="엑스 버튼"
                  onClick={toggleCreateFolderModal}
                />
              </InputFolderName>
            </div>
            <Smallbox />
            <Box />
            <ButtonContainer>
              <CancelButton onClick={toggleCreateFolderModal}>
                취소
              </CancelButton>
              <CreateButton onClick={handleSubmit}>생성</CreateButton>
            </ButtonContainer>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
