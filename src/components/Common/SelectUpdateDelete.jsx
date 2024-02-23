import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import EditPencilIcons from "../../assets/Icons/editpencil.svg";
import BinIcons from "../../assets/Icons/bin.svg";
import XButton from "../../assets/Icons/XButton.svg";
import axios from "axios";

const DropdownWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 200px;
  box-shadow: 2px 2px 2px 2px grey;
  z-index: 3;
`;

const Option = styled.div`
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

function FolderDeleteModal({ folderId }) {
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

  const handleSubmit = async () => {
    try {
      await axios.delete(`http://localhost:8080/church+/folder/${folderId}`);
      console.log("폴더가 성공적으로 삭제되었습니다.");
      toggleCreateFolderModal();
      window.location.reload();
    } catch (error) {
      console.error("폴더 삭제에 실패했습니다:", error);
      console.log("folderId:", folderId);
    }
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

function SelectUpdateDelete({ folderId }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setShowDropdown(!showDropdown);
    console.log("folderId:", folderId);
  };

  const handleDropdownItemClick = () => {
    setShowDropdown(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
    setShowDropdown(false); // FolderDeleteModal을 클릭했을 때도 드롭다운 메뉴 닫기
  };

  return (
    <div>
      <div>
        <img onClick={handleClick} src={EditPencilIcons} alt="수정 아이콘" />

        {showDropdown && (
          <DropdownWrapper ref={dropdownRef}>
            <FolderDeleteModal onClick={handleModalClick} folderId={folderId} />
            <Option onClick={handleDropdownItemClick}>
              <img src={BinIcons} alt="휴지통 아이콘" />
              <div>삭제하기</div>
            </Option>
          </DropdownWrapper>
        )}
      </div>
    </div>
  );
}

export default SelectUpdateDelete;
