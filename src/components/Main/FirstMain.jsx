import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ReadModal from "../Modal/ReadModal";
import EditIcons from "../../assets/Icons/FolderEdit.svg";

import EditPencilIcons from "../../assets/Icons/editpencil.svg";
import BinIcons from "../../assets/Icons/bin.svg";

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

function FirstMain() {
  const songData = [
    {
      musicName: "하나님의 세계",
      musicImageUrl:
        "https://mblogthumb-phinf.pstatic.net/20160524_274/lordship46_1464073042426hr2zD_JPEG/%C7%CF%B3%AA%B4%D4%C0%C7_%BC%BC%B0%E8%28%C2%FC_%BE%C6%B8%A7%B4%D9%BF%EE_%B0%F7%C0%CC%B6%F3%29-001-001.jpg?type=w800",
      link: "https://youtu.be/nUTvfKu7q3c?feature=shared",
      description: "피아노는 솔로 준비 부탁합니다^^",
      code: "G",
    },
    {
      musicName: "온 맘 다해",
      musicImageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAyMjA1MDNfMTMg/MDAxNjUxNTgzMzg5OTA0.eNV7yEOlI8uZEtj4_9ubRvcqr_ukcAa-sHhevD0fkLEg.FlCPv_9Axi97w1QbxHxMMWo0XnAsbKZ_IcItez3SLkEg.PNG.joseph1040/%EC%98%A8%EB%A7%98%EB%8B%A4%ED%95%B4.png?type=w800",
      link: "https://youtu.be/nUTvfKu7q3c?feature=shared",
      description: "네에에",
      code: "G",
    },
    {
      musicName: "사망의 그늘에 앉아",
      musicImageUrl: "https://t1.daumcdn.net/cfile/tistory/99713A485FDFE5A90E",
      link: "https://youtu.be/nUTvfKu7q3c?feature=shared",
      description: "하하",
      code: "G",
    },
    {
      musicName: "당신은 영광의 왕",
      musicImageUrl:
        "https://blog.kakaocdn.net/dn/kzqmh/btqzPmnYW2J/1dk0cT0dJtHii5Cez2p3GK/img.gif",
      link: "https://youtu.be/nUTvfKu7q3c?feature=shared",
      description: "하하",
      code: "G",
    },
    {
      musicName: "주는 존귀하신 분",
      musicImageUrl:
        "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPmxLv%2FbtscQmw9dI3%2F1Y2JOBuQctYgBowrmi10Z0%2Fimg.jpg",
      link: "https://youtu.be/nUTvfKu7q3c?feature=shared",
      description: "하하",
      code: "G",
    },
  ];

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
        {songData.map((song, index) => (
          <FolderItem key={index}>
            <ImageContainer onClick={() => toggleReadModal(index)}>
              <FolderImage src={song.musicImageUrl} alt={song.musicName} />
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
              {song.musicName} {song.code} Key
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
