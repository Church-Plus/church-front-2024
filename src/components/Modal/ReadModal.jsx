import React, { useState } from "react";
import styled from "styled-components";
import arrowIcons from "../../assets/Icons/arrow-left.svg";
import multiplePagesIcons from "../../assets/Icons/multiplePages.svg";
import printngIcons from "../../assets/Icons/printing.svg";
import shareIcons from "../../assets/Icons/share.svg";
import videoLinkIcons from "../../assets/Icons/vdieoLink.svg";

const modalStyles = `
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Modal = styled.div`
  ${modalStyles}
`;

const Overlay = styled.div`
  ${modalStyles}
  background: rgba(166, 166, 170, 0.8);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #e8e8ef;
  padding: 2rem;
  border-radius: 1.5rem;
  width: 45rem;
  height: 38rem;
`;

const ModalTop = styled.div`
  display: flex;
  font-size: 22px;
`;

const Title = styled.div`
  text-align: center;
  width: 25rem;
  height: 2.5rem;
  margin-left: 6rem;
  margin-right: 3.9rem;
  border-bottom: 1px solid #c1c1c1;
`;

const Icons = styled.div`
  img {
    padding-top: 0.8rem;
    height: 1.7rem;
  }

  img:not(:last-child) {
    padding-right: 1rem;
  }
`;

const ModalBody = styled.div`
  display: flex;
`;

const Photo = styled.img`
  width: 36rem;
  height: 35.5rem;
  margin-right: 2rem;
`;

const Link = styled.div`
  display: flex;
  width: 15rem;
  padding-top: 1rem;
  margin-bottom: 0.8rem;
  justify-content: left;
  cursor: pointer;

  div {
    color: #281a47;
  }
  img {
    padding-top: 0.2rem;
    height: 1.2rem;
  }
`;

const Text = styled.div`
  background-color: #ffffff;
  width: 13rem;
  height: 26rem;
  border-radius: 1.5rem;
  text-align: center;
  padding: 1rem;
  padding-top: 2rem;
`;

const CloseModal = styled.div`
  cursor: pointer;
  img {
    height: 3rem;
  }
`;

export default function ReadModal() {
  // 버튼이 클릭되어야만 모달이 보이도록 초기상태 지정
  const [readModal, setReadModal] = useState(false);

  // 버튼 클릭이벤트 발생시 초기상태 반전
  const toggleReadModal = () => {
    setReadModal((prevState) => !prevState);
  };

  // 악보관련 링크를 클릭했을 경우
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  // 모달창이 열렸을 경우, 화면 스크롤 방지
  if (readModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  //더미데이터
  const songData = {
    title: "주사랑 D Key",
    photoUrl:
      "https://mblogthumb-phinf.pstatic.net/20160524_274/lordship46_1464073042426hr2zD_JPEG/%C7%CF%B3%AA%B4%D4%C0%C7_%BC%BC%B0%E8%28%C2%FC_%BE%C6%B8%A7%B4%D9%BF%EE_%B0%F7%C0%CC%B6%F3%29-001-001.jpg?type=w800",
    videoLink: "https://youtu.be/nUTvfKu7q3c?feature=shared",
    description: "피아노는 솔로 준비 부탁합니다^^",
  };

  return (
    <>
      <button onClick={toggleReadModal}>Open</button>

      {readModal && (
        <Modal>
          <Overlay onClick={toggleReadModal} />
          <ModalContent>
            <ModalTop>
              <CloseModal>
                <img
                  onClick={toggleReadModal}
                  src={arrowIcons}
                  alt="뒤로가기"
                />
              </CloseModal>
              <Title>{songData.title}</Title>
              <Icons>
                <img src={multiplePagesIcons} alt="다중페이지 아이콘" />
                <img src={printngIcons} alt="프린트 아이콘" />
                <img src={shareIcons} alt="공유 아이콘" />
              </Icons>
            </ModalTop>
            <ModalBody>
              <Photo src={songData.photoUrl} alt="찬양악보"></Photo>
              <div>
                <Link>
                  <img src={videoLinkIcons} alt="영상링크 아이콘" />
                  <div onClick={() => handleLinkClick(songData.videoLink)}>
                    {songData.videoLink}
                  </div>
                </Link>
                <Text>{songData.description}</Text>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
