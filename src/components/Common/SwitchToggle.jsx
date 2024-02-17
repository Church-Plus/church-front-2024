import React, { useState } from "react";
import styled from "styled-components";

const SwitchToggleBox = styled.div`
  margin-left: 30rem;
  padding-top: 1.5rem;
`;

//label: 클릭을 감지하고 배경 변경할 수 있음
const InputWrapper = styled.label`
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  //체크박스의 박스모양이 보이지 않도록 화면에 나오지 않도록 정의
  left: -9999px;
  top: -9999px;
`;

const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 90px;
  height: 43px;
  border-radius: 100px;
  //$toggled prop의 값에 따라 배경색 변경
  background-color: ${({ $toggled }) => ($toggled ? "#595482" : "#ffffff")};
  //요소의 위치를 상대적으로 지정
  position: relative;
  transition: background-color 0.3s;

  //$toggled prop의 값에 따라 보더 색상 변경
  border: ${({ $toggled }) =>
    $toggled ? "1px solid #595482" : "1px solid black"};

  //가상 요소 before를 사용하여 슬라이더의 내부 원 정의
  //내부 원의 위치와 색상은 $toggled prop의 값에 따라 동적으로 변경
  &:before {
    content: "";
    position: absolute;
    top: 7px;
    left: ${({ $toggled }) => ($toggled ? "53px" : "9px")};
    width: 29px;
    height: 29px;
    border-radius: 50%;
    background: ${({ $toggled }) => ($toggled ? "#fff" : "#000")};
    transition: left 0.2s, background-color 0.3s;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }
`;

const SwitchToggle = () => {
  //토글의 초기값은 폴더로 지정
  const [toggled, setToggled] = useState(false);

  //토글 상태 반전
  const handleClick = () => {
    setToggled(!toggled);
  };

  //received `true` for a non-boolean attribute에러 해결
  //$toggled: 사용할 속성 명 앞에 $기호를 붙여 DOM요소로 전달되지 않게 하는 방법
  return (
    <SwitchToggleBox>
      <InputWrapper>
        <Input type="checkbox" checked={toggled} onChange={() => {}} />
        <Slider $toggled={toggled} onClick={handleClick} />
      </InputWrapper>
    </SwitchToggleBox>
  );
};

export default SwitchToggle;