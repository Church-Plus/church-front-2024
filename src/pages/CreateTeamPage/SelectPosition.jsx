import React, { useState } from "react";
import styled, { css } from "styled-components";
import completeBtn from "../../assets/commonStyle/CompleteButton.svg";
import completeBtnHover from "../../assets/commonStyle/CompleteButtonHover.svg";

import img1 from "../../assets/positionImg/1_Leader.svg";
import img2 from "../../assets/positionImg/2_MainCindy.svg";
import img3 from "../../assets/positionImg/3_SecondCindy.svg";
import img4 from "../../assets/positionImg/4_Drum.svg";
import img5 from "../../assets/positionImg/5_Aucoustic Guitar.svg";
import img6 from "../../assets/positionImg/6_Electric Guitar.svg";
import img7 from "../../assets/positionImg/7_Base Guitar.svg";
import img8 from "../../assets/positionImg/8_Singer.svg";
import img9 from "../../assets/positionImg/9_Enginner.svg";
import img10 from "../../assets/positionImg/10_Pastor.svg";
import { useLocation, useNavigate } from "react-router-dom";
import createGroup from "../../apis/createGroup";

const positionImages = [
  {
    image: img1,
    description: "리더",
  },
  {
    image: img2,
    description: "메인 신디",
  },
  {
    image: img3,
    description: "세컨 신디",
  },
  {
    image: img4,
    description: "드럼",
  },
  {
    image: img5,
    description: "어쿠스틱 기타",
  },
  {
    image: img6,
    description: "일렉 기타",
  },
  {
    image: img7,
    description: "베이스 기타",
  },
  {
    image: img8,
    description: "싱어",
  },
  {
    image: img9,
    description: "엔지니어",
  },
  {
    image: img10,
    description: "목사님",
  },
];

const Wrapper = styled.div``;

const TopNoticeBars = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 4.5rem;
`;

const Bar = styled.div`
  width: 27%;
  height: 5px;
  background-color: #efeff0;
  margin-right: 1rem;
  border-radius: 30px;

  ${(props) =>
    props.$now &&
    css`
      background-color: #8248f2;
    `}
`;

const Text = styled.div`
  font-size: 40px;
  padding-left: 8.5%;
  padding-top: 4%;
`;

const PositionContainer = styled.div`
  margin: 2rem auto 0rem auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 85%;
`;

const PositionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const PositionImage = styled.img`
  height: 130px;
  width: 130px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    filter: grayscale(0.9);
  }
`;

const Input = styled.div`
  padding-top: 20px;
  font-size: 30px;
  text-align: center;
`;

const Btn = styled.div`
  margin-top: 0.5rem;
  text-align: center;

  img {
    height: 59px;
    cursor: pointer;
  }

  img:hover {
    content: url(${completeBtnHover});
  }
`;

function SelectPosition() {
  const navigate = useNavigate();
  const location = useLocation();
  const [position, setPosition] = useState(null);

  const handlePositionSelect = (position) => {
    setPosition(position.description);
  };

  const handleCompleteBtnClick = async () => {
    // 여기서 선택된 포지션을 활용하여 작업 수행
    const groupName = location.state.teamName;
    const nickname = location.state.userName;

    const memberId = localStorage.getItem("memberId");

    try {
      await createGroup(groupName, memberId, position, nickname);
      navigate("/main");
    } catch (error) {
      console.error("그룹 추가 실패:", error);
    }
  };

  return (
    <Wrapper>
      <TopNoticeBars>
        <Bar />
        <Bar />
        <Bar $now />
      </TopNoticeBars>

      <Text>포지션을 선택해주세요.</Text>

      <PositionContainer>
        {positionImages.map((position, index) => (
          <PositionItem
            key={index}
            onClick={() => handlePositionSelect(position)}
          >
            <PositionImage src={position.image} alt={position.description} />
            <Input>{position.description}</Input>
          </PositionItem>
        ))}
      </PositionContainer>

      <Btn>
        <img
          onClick={handleCompleteBtnClick}
          src={completeBtn}
          alt="완료 버튼"
        />
      </Btn>
    </Wrapper>
  );
}

export default SelectPosition;
