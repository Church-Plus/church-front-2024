import React, { useState } from "react";
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
  position: relative;
  width: fit-content;
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

const Input = styled.div`
  padding-top: 20px;
  font-size: 18px;
  text-align: center;
`;

//수정, 삭제 드롭다운
const DropdownWrapper = styled.div`
  //수정아이콘 클릭시 바로 밑에 드롭다운 뜨도록
  position: absolute;
  top: 55px;
  left: 250px;
  //악보와 드롭다운이 겹치도록
  z-index: 1;

  display: flex;
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
      title: "하나님의 세계 D Key",
      img: "https://mblogthumb-phinf.pstatic.net/20160524_274/lordship46_1464073042426hr2zD_JPEG/%C7%CF%B3%AA%B4%D4%C0%C7_%BC%BC%B0%E8%28%C2%FC_%BE%C6%B8%A7%B4%D9%BF%EE_%B0%F7%C0%CC%B6%F3%29-001-001.jpg?type=w800",
      videoLink: "https://youtu.be/nUTvfKu7q3c?feature=shared",
      description: "피아노는 솔로 준비 부탁합니다^^",
    },
    {
      title: "주님의 정원 G Key",
      img: "https://mblogthumb-phinf.pstatic.net/20160524_274/lordship46_1464073042426hr2zD_JPEG/%C7%CF%B3%AA%B4%D4%C0%C7_%BC%BC%B0%E8%28%C2%FC_%BE%C6%B8%A7%B4%D9%BF%EE_%B0%F7%C0%CC%B6%F3%29-001-001.jpg?type=w800",
      videoLink: "https://youtu.be/nUTvfKu7q3c?feature=shared",
      description: "5번정도 반복할게요",
    },
    {
      title: "주는 존귀하신 분 A Key",
      img: "https://mblogthumb-phinf.pstatic.net/20160524_274/lordship46_1464073042426hr2zD_JPEG/%C7%CF%B3%AA%B4%D4%C0%C7_%BC%BC%B0%E8%28%C2%FC_%BE%C6%B8%A7%B4%D9%BF%EE_%B0%F7%C0%CC%B6%F3%29-001-001.jpg?type=w800",
      videoLink: "https://youtu.be/nUTvfKu7q3c?feature=shared",
      description: "즐거운 주일 되세요",
    },
  ];

  const [readModal, setReadModal] = useState(false); // readModal 초기상태 설정
  const [selectedSongIndex, setSelectedSongIndex] = useState(null); // 선택된 곡의 인덱스
  const [showDropdown, setShowDropdown] = useState(
    Array(songData.length).fill(false)
  ); // 각 악보 항목의 드롭다운 초기상태 배열

  // 악보 정보를 띄우는 모달
  const toggleReadModal = () => {
    // 모달 열고 닫는 함수
    if (selectedSongIndex !== null) {
      //readModal 상태반전
      const newState = !readModal;
      setReadModal(newState);
      // 모달 열림 및 닫힘에 따라 body 스타일 변경
      document.body.style.overflow = newState ? "hidden" : "auto";
    }
  };

  const toggleModal = (index) => {
    setSelectedSongIndex(index); // 선택된 곡의 인덱스 설정
    toggleReadModal(); // 모달 열기
  };

  // 수정, 삭제 드롭다운 토글 함수
  const toggleDropdown = (index) => {
    //특정 인덱스의 드롭다운 상태를 토글 (상태반전)
    const updatedDropdownStates = showDropdown.map((state, i) =>
      i === index ? !state : false
    );
    setShowDropdown(updatedDropdownStates);
  };

  // 수정, 삭제 드롭다운 닫기 함수
  const closeDropdown = () => {
    setShowDropdown(Array(songData.length).fill(false)); // 모든 드롭다운을 닫음
  };

  return (
    <Wrapper>
      <FolderContainer>
        {songData.map((song, index) => (
          <FolderItem key={index}>
            <ImageContainer onClick={() => toggleModal(index)}>
              <FolderImage src={song.img} alt={song.title} />
              <EditIcon
                onClick={(e) => {
                  e.stopPropagation(); // 이미지 클릭 이벤트가 상위 요소로 전파되지 않도록 중지
                  toggleDropdown(index);
                }}
                src={EditIcons}
                alt="파일 수정"
              />
              {/* 수정, 삭제 드롭다운 부분 */}
              {showDropdown[index] && (
                <DropdownWrapper>
                  {/* 현재는 Option을 클릭하면 ReadModal이 열리는데 각각의 div에 onClick으로 새로운 모달 오픈 함수를 호출하면 해결할 수 있을 것 같음 */}
                  <Option>
                    <img src={EditPencilIcons} alt="수정 아이콘" />
                    <div onClick={() => closeDropdown()}>수정하기</div>
                  </Option>
                  <Option>
                    <img src={BinIcons} alt="휴지통 아이콘" />
                    <div onClick={() => closeDropdown()}>삭제하기</div>
                  </Option>
                </DropdownWrapper>
              )}
            </ImageContainer>
            <Input>{song.title}</Input>
          </FolderItem>
        ))}
      </FolderContainer>
      {readModal && (
        <ReadModal
          toggleReadModal={() => toggleReadModal(null)} // 모달 닫기
          selectedSong={songData[selectedSongIndex]} // 선택된 곡의 데이터를 props로 전달
        />
      )}
    </Wrapper>
  );
}

export default FirstMain;
