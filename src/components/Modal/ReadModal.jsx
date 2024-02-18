import React from "react";
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
  z-index: 3;
`;

const Overlay = styled.div`
  ${modalStyles}
  background: rgba(166, 166, 170, 0.8);
  cursor: pointer;
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

export default function ReadModal({ toggleReadModal, selectedSong }) {
  const { title, img, videoLink, description } = selectedSong;

  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      {ReadModal && (
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
              <Title>{title}</Title>
              <Icons>
                <img src={multiplePagesIcons} alt="다중페이지 아이콘" />
                <img src={printngIcons} alt="프린트 아이콘" />
                <img src={shareIcons} alt="공유 아이콘" />
              </Icons>
            </ModalTop>
            <ModalBody>
              <Photo src={img} alt="찬양악보"></Photo>
              <div>
                <Link>
                  <img src={videoLinkIcons} alt="영상링크 아이콘" />
                  <div onClick={() => handleLinkClick(videoLink)}>
                    {videoLink}
                  </div>
                </Link>
                <Text>{description}</Text>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
