import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { AddBtn } from "../Common/Common";
import addIcon from "../../assets/Icons/add.svg";
import { useParams } from "react-router";
import createFolder from "../../apis/createFolder";

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
  height: 447px;
  width: 600px;
  background-color: #e8e8ef;
  border: none;
  border-radius: 67px;
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
  font-size: 24px;
  font-family: "Pretendard";
  &::placeholder {
    color: #bbbbbb;
  }
`;

const Smallbox = styled.div`
  margin-top: 40px;
  margin-right: auto;
  margin-left: 148px;
  background-color: #c4c4d8;
  height: 20px;
  width: 100px;
  border-radius: 30px 30px 0px 0px;
`;

const Box = styled.div`
  height: 201px;
  width: 305px;
  border-radius: 0px 30px 30px 30px;
  background-color: #c4c4d8;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  width: 250px;
`;
const CancelButton = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 40px;
  font-size: 22px;
  border: 0.9px solid black;
  font-family: "Pretendard";

  cursor: pointer;
`;
const CreateButton = styled.button`
  margin-left: 48px;
  width: 90px;
  height: 45px;
  border-radius: 40px;
  background-color: #9f9ebc;
  color: white;
  font-size: 22px;
  border: none;
  font-family: "Pretendard";

  cursor: pointer;
`;

export default function CreateFolderModal({ handleAddFolder }) {
  const [createFolderModal, setCreateFolderModal] = useState(false);
  const [folderName, setFolderName] = useState("");
  const { month } = useParams();
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

  const handleSubmit = async () => {
    const path = month;
    const groupId = localStorage.getItem("groupId");
    console.log(path);
    if (!folderName.trim()) {
      inputRef.current.focus();
      return;
    }

    try {
      await createFolder(folderName, path, groupId);
      handleAddFolder(folderName);
      toggleCreateFolderModal();
    } catch (error) {
      console.error("Error creating group:", error);
    }
  };

  return (
    <>
      <AddBtn style={{ marginTop: "100px" }} onClick={toggleCreateFolderModal}>
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
              <CreateButton onClick={handleSubmit}>확인</CreateButton>
            </ButtonContainer>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
