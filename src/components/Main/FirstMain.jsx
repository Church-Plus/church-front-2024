import React from "react";
import styled from "styled-components";

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

  filter: opacity(0.7) drop-shadow(0 0 0 #9b6cf5);
`;

const Input = styled.div`
  padding-top: 20px;
  font-size: 18px;
  text-align: center;
`;

function FirstMain() {
  const songData = [
    {
      img: "https://cdn.pixabay.com/photo/2021/04/23/10/11/music-book-6201325_1280.jpg",
      title: "예수로살리|첫번째곡",
    },
    {
      img: "https://cdn.pixabay.com/photo/2021/04/23/10/11/music-book-6201325_1280.jpg",
      title: "예수로살리|첫번째곡",
    },
    {
      img: "https://cdn.pixabay.com/photo/2021/04/23/10/11/music-book-6201325_1280.jpg",
      title: "예수로살리|첫번째곡",
    },
    {
      img: "https://cdn.pixabay.com/photo/2021/04/23/10/11/music-book-6201325_1280.jpg",
      title: "예수로살리|첫번째곡",
    },
    {
      img: "https://cdn.pixabay.com/photo/2021/04/23/10/11/music-book-6201325_1280.jpg",
      title: "예수로살리|첫번째곡",
    },
    {
      img: "https://cdn.pixabay.com/photo/2021/04/23/10/11/music-book-6201325_1280.jpg",
      title: "예수로살리|첫번째곡",
    },
    {
      img: "https://cdn.pixabay.com/photo/2021/04/23/10/11/music-book-6201325_1280.jpg",
      title: "예수로살리|첫번째곡",
    },
  ];

  return (
    <Wrapper>
      <FolderContainer>
        {songData.map((song, index) => (
          <FolderItem key={index}>
            <FolderImage src={song.img} alt={song.title} />
            <Input>{song.title}</Input>
          </FolderItem>
        ))}
      </FolderContainer>
    </Wrapper>
  );
}

export default FirstMain;
