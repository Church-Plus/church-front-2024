//종현
import React, { useState, useRef } from "react";
import { Modal } from "@mui/material";
import axios from "axios";
import addIcon from "../../assets/Icons/add.svg";
import { styled as materialStyled } from "@mui/material/styles";
import { Box, Button, Input, Typography } from "@mui/material";
import addMusicSheet from "../../assets/Icons/addMusicSheet.svg";
import XButton from "../../assets/Icons/XButton.svg";

const CustomButton = materialStyled("div")`
display:flex;
justify-content: center;
align-items: center;
height: 80px;
  background-color: #c0bed3;
  border: none;
  height: 190px;
  width: 290px;
  border-radius: 30px;

  margin-left: 50px;
  margin-top: 50px;
  cursor: pointer;

  img {
    height: 60px;
  }

`;

const ModalContent = materialStyled(Box)`
  display:flex;
  flex-direction: column;
  align-items:center;
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  width: 923px;
  height: 710px;
  background-color: rgba(239, 239, 240, 1);
  box-shadow: ${(props) => props.theme.shadows[24]};
  padding: ${(props) => props.theme.spacing(4)};
`;

const ModalHeader = materialStyled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing(4)};
  padding-bottom: ${(props) => props.theme.spacing(1)};
  display:flex;
  justify-content: flex-end;
  width:850px;
  img {
    cursor: pointer; 
  }

  img:hover {
    opacity: 0.8; 
  }
`;

const ModalBody = materialStyled(Box)`
  
  width:768px;
  height:462px;
  display:flex;
  justify-content:space-between;
`;

const LeftBody = materialStyled(Typography)`
width:338px;
height:461px;
border-radius:40px;
background-color:rgba(99, 93, 144, 0.3);
display:flex;
justify-content:center;
align-items:center;
overflow: hidden; 
`;

const RightBody = materialStyled(Typography)`
width:370px;
height:461px;
border-radius:40px;
`;
const SmallInput = materialStyled(Input)`
&& {
  font-size:23px;
  padding-left:30px;
  margin-bottom: 20px;
  background-color: white;
  width: 370px;
  height: 48px;
  border: 1px solid #C1C1C1;
  border-radius: 40px;
  &.MuiInput-underline {
    &::before,
    &::after {
      border-bottom: none;
    }
    &:hover::before {
      border-bottom: none;
    }
  }
  &::placeholder {
    color: black;
  }
}
`;
const BigInput = materialStyled(Input)`
&& {
  font-size:23px;
  padding-left:25px;
  margin-bottom: 20px;
  background-color: white;
  width: 370px;
  height: 203px;
  border: 1px solid #C1C1C1;
  border-radius: 40px;
  &.MuiInput-underline {
    &::before,
    &::after {
      border-bottom: none;
    }
    &:hover::before {
      border-bottom: none;
    }
  }
  &::placeholder {
    color: black;
    
  }
}
`;
const SongTitle = ({ placeholder, ...props }) => {
  return <SmallInput placeholder={placeholder} {...props} />;
};
const SongCode = ({ placeholder, ...props }) => {
  return <SmallInput placeholder={placeholder} {...props} />;
};
const VideoLink = ({ placeholder, ...props }) => {
  return <SmallInput placeholder={placeholder} {...props} />;
};
const Notice = ({ placeholder, ...props }) => {
  return <BigInput placeholder={placeholder} {...props} />;
};
const SubmitButton = materialStyled(Button)`
&& {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing(7)};
  border: 1px solid black;
  border-radius: 40px;
  width: 120px;
  height: 60px;
  font-size: 30px;
  font-weight: 400;
  color: black;
}

&.MuiButton-root {
  .MuiButton-label {
    transition: none;
  }
}

&:hover {
  background-color: rgba(99, 93, 144, 0.3);
  color: white;
  border:none;
}
`;

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
            <img src={XButton} alt="엑스 버튼" onClick={handleClose}></img>
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
                <img src={addMusicSheet} alt="악보추가 이미지" border="0"></img>
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
              <SongCode
                name="SongCode"
                placeholder={"시작 코드"}
                onChange={handleInputChange}
              ></SongCode>
              <VideoLink
                name="videoLink"
                placeholder={"영상 링크"}
                onChange={handleInputChange}
              ></VideoLink>
              <Notice
                name="notice"
                placeholder={"전달사항"}
                onChange={handleInputChange}
              ></Notice>
            </RightBody>
          </ModalBody>
          <SubmitButton onClick={handleClose}>확인</SubmitButton>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UploadModal;
