import React from "react";
import Header from "../../components/Main/Header";
import Menu from "../../components/Main/Menu";
import DropdownMenu from "../../components/Main/DropdownMenu";
import {
  Wrapper,
  Smallbox,
  Box,
  FolderContainer,
} from "../../components/Common/Common";
import { useParams } from "react-router-dom";
import UploadModal from "../../components/Modal/UploadModal";

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
              <UploadModal />
            </FolderContainer>
          </Box>
        </Wrapper>
      </div>
    </>
  );
}

export default FolderPage;
