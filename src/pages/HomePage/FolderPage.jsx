import React, { useState, useEffect } from "react";
import Header from "../../components/Main/Header";
import Menu from "../../components/Main/Menu";
import DropdownMenu from "../../components/Main/DropdownMenu";
import {
  Wrapper,
  Smallbox,
  Box,
  FolderContainer,
  AddBtn,
  FolderTop,
  FolderBox,
  Input,
} from "../../components/Common/Common";
import addIcon from "../../assets/Icons/add.svg";
import { useNavigate, useParams, Link } from "react-router-dom";

function FolderPage() {
  const params = useParams();
  const folderName = params.content;
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div>
          <Menu />
          <DropdownMenu />
        </div>
        <Wrapper>
          <Smallbox>{folderName}</Smallbox>
          <Box>
            <FolderContainer>
              <AddBtn type="submit">
                {" "}
                <img src={addIcon} alt="사진추가 아이콘" />
              </AddBtn>
            </FolderContainer>
          </Box>
        </Wrapper>
      </div>
    </>
  );
}

export default FolderPage;
