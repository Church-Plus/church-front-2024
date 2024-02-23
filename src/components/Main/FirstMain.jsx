import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ReadModal from "../Modal/ReadModal";
import EditIcons from "../../assets/Icons/FolderEdit.svg";

import EditPencilIcons from "../../assets/Icons/editpencil.svg";
import BinIcons from "../../assets/Icons/bin.svg";
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

const EditIcon = styled.img`
  position: absolute;
  padding: 1.5rem;
  right: 0.4rem;
  z-index: 0.1;
  height: 1.2rem;

  cursor: pointer;
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

const DropdownWrapper = styled.div`
  position: absolute;
  top: 55px;
  left: 250px;
  z-index: 1;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  width: 200px;
  box-shadow: 2px 2px 2px 2px grey;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  text-align: left;
  cursor: pointer;
  border: none;
  background-color: white;

  &:hover {
    background-color: #dfdfdf;
  }

  img {
    padding: 10px;
  }
`;

function FirstMain({ searchMusicName }) {
  const groupId = localStorage.getItem("groupId");
  const [songData, setSongData] = useState([]);
  const [filteredSongData, setFilteredSongData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [groupId]);

  const fetchData = async () => {
    try {
      const serverResponse = await axios.get(
        // `https://api.zionhann.shop/app/churchplus/church+/music/list/${groupId}`
        `http://localhost:8080/church+/music/list/${groupId}`
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
    // 검색어가 입력되지 않은 경우에는 모든 악보 데이터를 보여줍니다.
    if (!searchMusicName) {
      setFilteredSongData(songData);
    } else {
      // 검색어가 입력된 경우에는 검색어에 맞는 악보 데이터만 필터링하여 보여줍니다.
      const filteredData = songData.filter((music) =>
        music.musicName.toLowerCase().includes(searchMusicName.toLowerCase())
      );
      setFilteredSongData(filteredData);
    }
  }, [songData, searchMusicName]);

  const [readModal, setReadModal] = useState(false);
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);
  const [showDropdown, setShowDropdown] = useState(
    Array(songData.length).fill(false)
  );
  const dropdownRef = useRef(null);

  const toggleReadModal = (index) => {
    setSelectedSongIndex(index);
    setReadModal(!readModal);
    document.body.style.overflow = readModal ? "auto" : "hidden";
  };

  const toggleDropdown = (index) => {
    const updatedDropdownStates = showDropdown.map((state, i) =>
      i === index ? !state : false
    );
    setShowDropdown(updatedDropdownStates);
  };

  const closeDropdown = () => {
    setShowDropdown(Array(songData.length).fill(false));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = () => {
    closeDropdown();
  };

  return (
    <Wrapper>
      <FolderContainer>
        {filteredSongData.map((music, index) => (
          <FolderItem key={index}>
            <ImageContainer onClick={() => toggleReadModal(index)}>
              <FolderImage src={music.musicImageUrl} alt={music.musicName} />
              <EditIcon
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
              )}
            </ImageContainer>
            <Input>
              {music.musicName} {music.code} Key
            </Input>
          </FolderItem>
        ))}
      </FolderContainer>
      {readModal && (
        <ReadModal
          toggleReadModal={() => toggleReadModal(null)}
          selectedSong={songData[selectedSongIndex]}
        />
      )}
    </Wrapper>
  );
}

export default FirstMain;
