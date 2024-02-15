//종현
import { styled as materialStyled } from "@mui/material/styles";
import { Box, Button, Input, Typography } from "@mui/material";

export const CustomButton = materialStyled("div")`
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
  margin-top: 100px;
  cursor: pointer;

  img {
    height: 60px;
  }

`;

export const ModalContent = materialStyled(Box)`
  display:flex;
  flex-direction: column;
  align-items:center;
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  width: 1113px;
  height: 860px;
  background-color: rgba(239, 239, 240, 1);
  box-shadow: ${(props) => props.theme.shadows[24]};
  padding: ${(props) => props.theme.spacing(4)};
`;

export const ModalHeader = materialStyled(Input)`
  margin-bottom: ${(props) => props.theme.spacing(4)};
  padding-bottom: ${(props) => props.theme.spacing(2)};
  display:flex;
  justify-content:center;
  align-items: center;
  width:611px;
  font-size:40px;
  border-bottom:1px solid #C1C1C1;
`;

export const ModalBody = materialStyled(Box)`
  
  width:937px;
  height:564px;
  display:flex;
  justify-content:space-between;
  margin-top: ${(props) => props.theme.spacing(2)};
`;

export const LeftBody = materialStyled(Typography)`
width:412px;
height:563px;
border-radius:40px;
background-color:rgba(99, 93, 144, 0.3);
display:flex;
justify-content:center;
align-items:center;
overflow: hidden; 
`;

export const RightBody = materialStyled(Typography)`
width:452px;
height:563px;
border-radius:40px;
`;
export const SmallInput = materialStyled(Input)`
&& {
  font-size:28px;
  
  padding-left:30px;
  margin-bottom: 20px;
  background-color: white;
  width: 452px;
  height: 59px;
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
export const BigInput = materialStyled(Input)`
&& {
  font-size:28px;
  padding-left:25px;
  margin-bottom: 20px;
  background-color: white;
  width: 452px;
  height: 248px;
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
export const SongTitle = ({ placeholder, ...props }) => {
  return <SmallInput placeholder={placeholder} {...props} />;
};
export const VideoLink = ({ placeholder, ...props }) => {
  return <SmallInput placeholder={placeholder} {...props} />;
};
export const StartCode = ({ placeholder, ...props }) => {
  return <SmallInput placeholder={placeholder} {...props} />;
};
export const EndCode = ({ placeholder, ...props }) => {
  return <SmallInput placeholder={placeholder} {...props} />;
};
export const Notice = ({ placeholder, ...props }) => {
  return <BigInput placeholder={placeholder} {...props} />;
};
export const SubmitButton = materialStyled(Button)`
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
const Modal = {
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
};
export default Modal;
