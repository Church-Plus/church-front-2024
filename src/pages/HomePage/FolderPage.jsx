import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import UploadModal from "../../components/Modal/UploadModal";
import SwitchToggle from "../../components/Common/SwitchToggle";
import styled from "styled-components";
import axios from "axios";

const FolderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  padding-left: 5.4rem;
`;

const FolderImage = styled.img`
  height: 12.6rem;
  width: 19.3rem;
  object-fit: cover;
  border-radius: 30px;
  cursor: pointer;

  filter: opacity(0.7) drop-shadow(0 0 0 #2e0b70);

  &:hover {
    filter: opacity(0.8) drop-shadow(0 0 0 #2e0084);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: fit-content;
`;

function FolderPage() {
  const params = useParams();
  const { month } = useParams();
  const { content } = useParams();
  const navigate = useNavigate();
  const folderName = params.content;
  const [songData, setSongData] = useState([]);
  const [reloadPage, setReloadPage] = useState(false);

  const groupId = localStorage.getItem("groupId");
  const path = `${month}-${content}`;

  useEffect(() => {
    navigate(`/monthPage/${month}/${content}`);
    fetchData();
  }, [groupId, path]);

  useEffect(() => {
    if (reloadPage) {
      fetchData();
      setReloadPage(false);
    }
  }, [reloadPage]);

  const fetchData = async () => {
    try {
      const serverResponse = await axios.get(
        `https://api.zionhann.shop/app/churchplus/church+/music/list/${groupId}/${path}`
      );
      setSongData(serverResponse.data.musics);
      console.log("악보 불러오기 성공");
    } catch (error) {
      console.error("악보 불러오기 실패:", error);
      setSongData([]);
    }
  };

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
              {songData.map((musics) => (
                <FolderItem key={musics.musicId}>
                  <ImageContainer>
                    <FolderImage
                      src={musics.musicImageUrl}
                      alt={"악보 이미지"}
                    />
                  </ImageContainer>
                  <p>{musics.musicName}</p>
                </FolderItem>
              ))}
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
