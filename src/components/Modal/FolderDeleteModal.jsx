import React, { useState, useEffect } from "react";
import styled from "styled-components";
import XButton from "../../assets/Icons/XButton.svg";
import BinIcons from "../../assets/Icons/bin.svg";

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

const InputFolderName = styled.div`
  margin-top: 23px;
  width: 300px;
  border: none;
  outline: none;
  background-color: #e8e8ef;
  /* text-align: center; */
  font-size: 24px;
  font-family: "Pretendard";
  img {
    margin-left: 71px;
    margin-bottom: 10px;
    cursor: pointer;
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

export default function FolderDeleteModal() {
  const [createFolderModal, setCreateFolderModal] = useState(false);

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

  const handleSubmit = () => {
    toggleCreateFolderModal();
  };

  return (
    <>
      <ModalOpen onClick={toggleCreateFolderModal}>
        <img src={BinIcons} alt="" />
        <div>삭제하기</div>
      </ModalOpen>
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
