import React from "react";
import styled from "styled-components";
import DropdownMUI from "./DropdownMUI";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #281a47;
  width: 350px;
  height: 100vh;
  padding-top: 20px;
  font-size: 15px;
`;

function DropdownMenu() {
  return (
    <Wrapper>
      dropdown mui 맛보기만
      <DropdownMUI />
      <DropdownMUI />
      <DropdownMUI />
    </Wrapper>
  );
}

export default DropdownMenu;
