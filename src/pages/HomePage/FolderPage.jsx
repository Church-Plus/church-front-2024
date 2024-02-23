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
import ReadModal from "../../components/Modal/ReadModal";
import FileEditDropdown from "../../components/Common/FileEditDropdown";

const FolderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
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

const FileNameEditButton = styled.div`
  display: flex;
  justify-content: center;
`;

function FolderPage() {
  const params = useParams();
  const { month, content } = params;
  const folderName = content;
  const navigate = useNavigate();
  const [songData, setSongData] = useState([]);
  const [reloadPage, setReloadPage] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [showReadModal, setShowReadModal] = useState(false);

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
        // `${process.env.REACT_APP_HOST_URL}/church+/music/list/${groupId}/${path}`
        `${process.env.REACT_APP_HOST_URL}/church+/music/list/${groupId}/${path}`
      );
      setSongData(serverResponse.data.musics);
      console.log("악보 불러오기 성공");
      console.log("songData:", songData);
    } catch (error) {
      console.error("악보 불러오기 실패:", error);
      setSongData([]);
    }
  };

  const handleSongClick = (selectedSong) => {
    setSelectedSong(selectedSong);
    setShowReadModal(true);
  };

  const toggleReadModal = () => {
    setShowReadModal(!showReadModal);
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
            <FolderContainer style={{ paddingTop: "100px" }}>
              <UploadModal />
              {songData.map((music) => (
                <div>
                  <FolderItem
                    key={music.musicId}
                    onClick={() => handleSongClick(music)}
                  >
                    <ImageContainer>
                      <FolderImage
                        src={music.musicImageUrl}
                        alt={"악보 이미지"}
                      />
                    </ImageContainer>
                  </FolderItem>
                  <FileNameEditButton>
                    {music.musicName}
                    <FileEditDropdown
                      musicId={music.musicId}
                      musicName={music.musicName}
                    />
                  </FileNameEditButton>
                </div>
              ))}
            </FolderContainer>
          </Box>
        </Wrapper>
        <div style={{ paddingRight: "2.5rem", visibility: "hidden" }}>
          <SwitchToggle />
        </div>
      </BackgroundWrapper>
      {showReadModal && (
        <ReadModal
          toggleReadModal={toggleReadModal}
          selectedSong={selectedSong}
        />
      )}
    </>
  );
}

export default FolderPage;
