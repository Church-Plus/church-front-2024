//종현
import React, { useState, useRef } from "react";
import { Modal } from "@mui/material";
import axios from "axios";
import addIcon from "../../assets/Icons/add.svg";
import {
  CustomButton,
  ModalContent,
  ModalHeader,
  ModalBody,
  LeftBody,
  RightBody,
  SubmitButton,
  SongTitle,
  VideoLink,
  StartCode,
  EndCode,
  Notice,
} from "../../components/Modal/Modal";

const UploadModal = () => {
  const [open, setOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    videoLink: "",
    startCode: "",
    endCode: "",
    notice: "",
    uid: "",
  });
  const fileInputRef = useRef(null);

  const handleOpen = () => {
    console.log("모달이 열립니다.");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLeftBodyClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://ll-api.jungsub.com/ptrack/post/",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <CustomButton onClick={handleOpen}>
        {" "}
        <img src={addIcon} alt="사진추가 아이콘" />
      </CustomButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <ModalHeader variant="h6" component="h2">
            곡 제목
          </ModalHeader>
          <ModalBody>
            <LeftBody onClick={handleLeftBodyClick}>
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Uploaded"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <img
                  src="https://i.ibb.co/k99P1Dg/2024-02-08-165002.png"
                  alt="2024-02-08-165002"
                  border="0"
                ></img>
              )}
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileInputChange}
              />
            </LeftBody>

            <RightBody>
              <SongTitle
                name="title"
                placeholder={"곡 제목"}
                onChange={handleInputChange}
              ></SongTitle>
              <VideoLink
                name="videoLink"
                placeholder={"영상 링크"}
                onChange={handleInputChange}
              ></VideoLink>
              <StartCode
                name="startCode"
                placeholder={"시작 코드"}
                onChange={handleInputChange}
              ></StartCode>
              <EndCode
                name="endCode"
                placeholder={"끝 코드"}
                onChange={handleInputChange}
              ></EndCode>
              <Notice
                name="notice"
                placeholder={"전달사항"}
                onChange={handleInputChange}
              ></Notice>
            </RightBody>
          </ModalBody>
          <SubmitButton onClick={handleSubmit}>확인</SubmitButton>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UploadModal;
