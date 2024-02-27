import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReadModal from "../Modal/ReadModal";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  height: 12.6rem;
  width: 19.3rem;
  border-radius: 30px;
  overflow: hidden;
`;

const FolderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 45rem;
`;

const FolderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  padding-left: 5.4rem;
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

const Input = styled.div`
  padding-top: 20px;
  font-size: 18px;
  text-align: center;
`;

function FirstMain({ searchMusicName, selectedKeyCode }) {
  const groupId = localStorage.getItem("groupId");
  const [songData, setSongData] = useState([]);
  const [filteredSongData, setFilteredSongData] = useState([]);

  useEffect(() => {
    console.log("Selected Key Code in FirstMain:", selectedKeyCode);
  }, [selectedKeyCode]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId]);

  useEffect(() => {
    console.log("selectedKeyCode:", selectedKeyCode);
  }, [selectedKeyCode]);

  const fetchData = async () => {
    try {
      const serverResponse = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/church+/music/list/${groupId}`
        // `${process.env.REACT_APP_HOST_URL}/music/list/${groupId}`
      );
      setSongData(serverResponse.data.musics);
      console.log("악보 불러오기 성공");
    } catch (error) {
      alert("불러올 악보가 없습니다. 악보를 생성해주세요");
      console.error("악보 불러오기 실패:", error);
      setSongData([]);
    }
  };

  useEffect(() => {
    // 검색어 및 선택된 키 코드가 변경될 때마다 필터링
    const filterData = () => {
      if (!searchMusicName && !selectedKeyCode) {
        setFilteredSongData(songData);
      } else {
        const filteredData = songData.filter((music) => {
          const bySearch =
            !searchMusicName ||
            music.musicName
              .toLowerCase()
              .includes(searchMusicName.toLowerCase()) ||
            music.code.toLowerCase().includes(searchMusicName.toLowerCase());
          const byKey = !selectedKeyCode || music.code === selectedKeyCode;
          return bySearch && byKey;
        });
        setFilteredSongData(filteredData);
      }
    };
    filterData();
  }, [songData, searchMusicName, selectedKeyCode]);

  console.log("selectedKeyCode:", selectedKeyCode);

  const [readModal, setReadModal] = useState(false);
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);
  // const [showDropdown, setShowDropdown] = useState(
  //   Array(songData.length).fill(false)
  // );
  // const dropdownRef = useRef(null);

  const toggleReadModal = (index) => {
    setSelectedSongIndex(index);
    setReadModal(!readModal);
    document.body.style.overflow = readModal ? "auto" : "hidden";
  };

  // const closeDropdown = useCallback(() => {
  //   setShowDropdown(Array(songData.length).fill(false));
  // }, [songData]);

  // const handleClickOutside = useCallback(
  //   (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       closeDropdown();
  //     }
  //   },
  //   [closeDropdown, dropdownRef]
  // );

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [handleClickOutside]);

  return (
    <Wrapper>
      <FolderContainer>
        {filteredSongData.map((music, index) => (
          <FolderItem key={index}>
            <ImageContainer onClick={() => toggleReadModal(index)}>
              <FolderImage src={music.musicImageUrl} alt={music.musicName} />
              {/* <EditIcon
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(index);
                }}
                src={EditIcons}
                alt="파일 수정"
              />
              {showDropdown[index] && (
                <DropdownWrapper show={showDropdown[index]} ref={dropdownRef}>
                  <Option onClick={handleOptionClick}>
                    <img src={EditPencilIcons} alt="수정 아이콘" />
                    <div>수정하기</div>
                  </Option>
                  <Option onClick={handleOptionClick}>
                    <img src={BinIcons} alt="휴지통 아이콘" />
                    <div>삭제하기</div>
                  </Option>
                </DropdownWrapper>
              )} */}
            </ImageContainer>
            <Input>
              {music.musicName} {music.code} Key
            </Input>
          </FolderItem>
        ))}
      </FolderContainer>
      {readModal && selectedSongIndex !== null && (
        <ReadModal
          toggleReadModal={() => toggleReadModal(null)}
          selectedSong={filteredSongData[selectedSongIndex]} // 모달을 열 때, 필더링된 악보의 데이터를 보여줄 수 있도록 prop에 전달되는 데이터 변경
        />
      )}
    </Wrapper>
  );
}

export default FirstMain;
