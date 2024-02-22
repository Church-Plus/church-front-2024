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
import SwitchToggle from "../../components/Common/SwitchToggle";

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
        <Wrapper
          style={{
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "800px",
            }}
          >
            <Smallbox>{folderName}</Smallbox>
          </div>
          <Box>
            <FolderContainer>
              <UploadModal />
            </FolderContainer>
          </Box>
        </Wrapper>
        <div style={{ paddingRight: "2.5rem", visibility: "hidden" }}>
          <SwitchToggle />
        </div>
      </BackgroundWrapper>
    </>
  );
}

export default FolderPage;
