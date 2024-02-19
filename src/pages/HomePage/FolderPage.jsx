import React from "react";
import Header from "../../components/Main/Header";
import Menu from "../../components/Main/Menu";
import DropdownMenu from "../../components/Main/DropdownMenu";
import {
  Wrapper,
  Smallbox,
  Box,
  FolderContainer,
  BackgroundWrapper,
} from "../../components/Common/Common";
import { useParams } from "react-router-dom";
import UploadModal from "../../components/Modal/UploadModal";

function FolderPage() {
  const params = useParams();
  const folderName = params.content;
  return (
    <>
      <Header />
      <BackgroundWrapper style={{ display: "flex" }}>
        <div>
          <Menu />
          <DropdownMenu />
        </div>
        <Wrapper>
          <div style={{ marginTop: "4.2rem" }}>
            <Smallbox>{folderName}</Smallbox>
          </div>
          <Box>
            <FolderContainer>
              <UploadModal />
            </FolderContainer>
          </Box>
        </Wrapper>
      </BackgroundWrapper>
    </>
  );
}

export default FolderPage;
