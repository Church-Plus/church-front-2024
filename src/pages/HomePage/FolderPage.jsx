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
  Input,
} from "../../components/Common/Common";
import { useParams } from "react-router-dom";
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
`;

const FolderImage = styled.img`
  width: 100%;
  height: auto; /* 너비에 맞게 자동으로 높이 조절 */
  object-fit: contain; /* 이미지가 완전히 보이도록 설정 */
  background-position: top; /* 이미지의 상단부터 보이도록 설정 */
  cursor: pointer;

  filter: opacity(0.7) drop-shadow(0 0 0 #2e0b70);

  &:hover {
    filter: opacity(0.8) drop-shadow(0 0 0 #2e0084);
  }
`;

const ImageContainer = styled.div`
  height: 12.6rem;
  width: 19.3rem;
  border-radius: 30px;
  overflow: hidden;
`;

const FileNameEditButton = styled.div`
  display: flex;
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
  vertical-align: baseline;
`;

function FolderPage() {
  const params = useParams();
  const { month, content } = params;
  const folderName = content;
  const [songData, setSongData] = useState([]);
  const [reloadPage, setReloadPage] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [showReadModal, setShowReadModal] = useState(false);
  const [filteredSongData, setFilteredSongData] = useState([]);
  const [searchMusicName, setSearchMusicName] = useState("");

  const groupId = localStorage.getItem("groupId");
  const path = `${month}-${content}`;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId, path]);

  useEffect(() => {
    if (reloadPage) {
      fetchData();
      setReloadPage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadPage]);

  useEffect(() => {
    if (showReadModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showReadModal]);

  useEffect(() => {
    // 검색어가 변경될 때마다 해당하는 폴더만 필터링하여 filteredSongData 상태 업데이트
    if (searchMusicName.trim() === "") {
      setFilteredSongData(songData); // 검색어가 비어있으면 모든 폴더를 보여줌
    } else {
      const filtered = songData.filter(
        (music) =>
          music.musicName
            .toLowerCase()
            .includes(searchMusicName.toLowerCase()) ||
          music.code.toLowerCase().includes(searchMusicName.toLowerCase())
      );
      setFilteredSongData(filtered);
    }
  }, [songData, searchMusicName]);

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
      <Header setSearch={setSearchMusicName} />
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
              {filteredSongData.map((music) => (
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
                    <Input>
                      {music.musicName} {music.code} Key
                    </Input>
                    <FileEditDropdown
                      musicId={music.musicId}
                      musicName={music.musicName}
                      folderId={music.folderId}
                      code={music.code}
                      description={music.description}
                      link={music.link}
                      musicImageUrl={music.musicImageUrl}
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
