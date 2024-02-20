import React, { useState } from "react";
import styled from "styled-components";
import EditPencilIcons from "../../assets/Icons/editpencil.svg";
import BinIcons from "../../assets/Icons/bin.svg";

const DropdownWrapper = styled.div`
  position: absolute;
  /* top: 130px;
  left: 220px; */

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

  // //이 변수를 사용하여 React 컴포넌트 내부에서 DOM 요소에 접근할 수 있음
  // const dropdownRef = useRef(null);

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       // 드롭다운 외부를 클릭했을 때 드롭다운 닫기
  //       setShowDropdown(false);
  //     }
  //   }

  //   // 이벤트 리스너 추가
  //   document.addEventListener("mousedown", handleClickOutside);

  //   // 컴포넌트가 언마운트되면 이벤트 리스너 제거
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [dropdownRef]);

  //상태반전
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div>
        <img onClick={toggleDropdown} src={EditPencilIcons} alt="수정 아이콘" />

        {showDropdown && (
          //드롭다운 메뉴를 참조하는 dropdownRef 변수가 실제 DOM 요소를 가리키게 됨 ref={dropdownRef}
          <DropdownWrapper>
            {/* 각각의 버튼을 클릭할 때 실행할 함수 onClick함수로~ */}
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
