import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import EditPencilIcons from "../../assets/Icons/editpencil.svg";
import BinIcons from "../../assets/Icons/bin.svg";
import FolderDeleteModal from "../Modal/FolderDeleteModal";

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

function SelectUpdateDelete() {
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
            <FolderDeleteModal onClick={handleModalClick} />
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
