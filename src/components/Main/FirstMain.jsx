import React, { useState } from "react";
import styled from "styled-components";
import ReadModal from "../Modal/ReadModal";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 100%;
  width: 800px;
  margin-top: 4rem;
  //wrapper 영역 확인용
  background-color: #ececfe;
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
`;

const FolderImage = styled.img`
  height: 190px;
  width: 290px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;

  filter: opacity(0.7) drop-shadow(0 0 0 #9b6cf5);
`;

const Input = styled.div`
  padding-top: 20px;
  font-size: 18px;
  text-align: center;
`;

function FirstMain() {
  const [readModal, setReadModal] = useState(false); // readModal 상태 추가

  const toggleReadModal = () => {
    // 모달 열고 닫는 함수
    const newState = !readModal;
    setReadModal(newState);
    // 모달 열림 및 닫힘에 따라 body 스타일 변경
    document.body.style.overflow = newState ? "hidden" : "auto";
  };

  const [selectedSongIndex, setSelectedSongIndex] = useState(null); // 선택된 곡의 인덱스

  const toggleModal = (index) => {
    setSelectedSongIndex(index); // 선택된 곡의 인덱스 설정
    toggleReadModal(); // 모달 열기
  };

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
    {
      title: "예수님만을 더욱 사랑 F Key",
      img: "https://mblogthumb-phinf.pstatic.net/20160524_274/lordship46_1464073042426hr2zD_JPEG/%C7%CF%B3%AA%B4%D4%C0%C7_%BC%BC%B0%E8%28%C2%FC_%BE%C6%B8%A7%B4%D9%BF%EE_%B0%F7%C0%CC%B6%F3%29-001-001.jpg?type=w800",
      videoLink: "https://youtu.be/nUTvfKu7q3c?feature=shared",
      description: "충분히 익혀오길 바랍니다.",
    },
  ];

  return (
    <Wrapper>
      <FolderContainer>
        {songData.map((song, index) => (
          <FolderItem key={index} onClick={() => toggleModal(index)}>
            <FolderImage src={song.img} alt={song.title} />
            <Input>{song.title}</Input>
          </FolderItem>
        ))}
      </FolderContainer>
      {readModal && (
        <ReadModal
          toggleReadModal={toggleReadModal}
          selectedSong={songData[selectedSongIndex]} // 선택된 곡의 데이터를 props로 전달
        />
      )}
    </Wrapper>
  );
}

export default FirstMain;
