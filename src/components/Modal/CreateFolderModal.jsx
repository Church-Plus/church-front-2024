import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { AddBtn } from "../Common/Common";
import addIcon from "../../assets/Icons/add.svg";

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
  height: 400px;
  width: 540px;
  background-color: #e8e8ef;
  border: none;
  border-radius: 60px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputFolderName = styled.input`
  margin-top: 23px;
  width: 300px;
  border: none;
  outline: none;
  background-color: #e8e8ef;
  text-align: center;
  font-size: 20px;
  &::placeholder {
    color: #bbbbbb;
  }
`;

const Smallbox = styled.div`
  margin-top: 25px;
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
  const inputRef = useRef(null);

  const toggleCreateFolderModal = () => {
    setCreateFolderModal((prevState) => !prevState);
    setFolderName("");
  };

  useEffect(() => {
    if (createFolderModal) {
      document.body.style.overflow = "hidden";
      inputRef.current.focus();
    } else {
      document.body.style.overflow = "auto";
    }
  }, [createFolderModal]);

  const handleInputChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleSubmit = () => {
    if (!folderName.trim()) {
      inputRef.current.focus();
      return;
    }
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
              <InputFolderName
                ref={inputRef}
                type="text"
                placeholder="폴더 이름을 입력하세요"
                value={folderName}
                onChange={handleInputChange}
              />
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
