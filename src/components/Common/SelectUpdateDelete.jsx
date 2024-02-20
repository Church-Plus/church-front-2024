import React, { useState } from "react";
import styled from "styled-components";
import EditPencilIcons from "../../assets/Icons/editpencil.svg";
import BinIcons from "../../assets/Icons/bin.svg";

const DropdownWrapper = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  width: 200px;

  box-shadow: 2px 2px 2px 2px grey;
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
  //드롭다운 메뉴 초기상태 지정
  const [showDropdown, setShowDropdown] = useState(false);

  //상태반전
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div>
        <img onClick={toggleDropdown} src={EditPencilIcons} alt="수정 아이콘" />

        {showDropdown && (
          <DropdownWrapper>
            <Option>
              <img src={EditPencilIcons} alt="수정 아이콘" />
              <div onClick={toggleDropdown}>수정하기</div>
            </Option>
            <Option>
              <img src={BinIcons} alt="휴지통 아이콘" />
              <div onClick={toggleDropdown}>삭제하기</div>
            </Option>
          </DropdownWrapper>
        )}
      </div>
    </div>
  );
}

export default SelectUpdateDelete;
