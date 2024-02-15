//버튼이나 공통 UI스타일
//예라

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Smallbox = styled.div`
  margin-top: 65px;
  margin-left: 21px;
  background-color: #e8e8ef;
  height: 40px;
  width: 190px;
  border-radius: 35px 35px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  margin-left: 21px;
  height: 100%;
  width: 800px;
  border-radius: 0px 40px 0px 0px;
  background-color: #e8e8ef;
`;

export const FolderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
`;

export const AddBtn = styled.button`
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

export const FolderTop = styled.div`
  background-color: #afacc7;
  border: none;
  height: 20px;
  width: 100px;
  border-radius: 28px 28px 0px 0px;

  margin-left: 50px;
  margin-top: 80px;
  cursor: pointer;
`;

export const FolderBox = styled.div`
  background-color: #a4a1bf;
  border: none;
  height: 190px;
  width: 290px;
  border-radius: 0px 30px 30px 30px;

  margin-left: 50px;
  cursor: pointer;
`;

export const Input = styled.div`
  padding-top: 20px;
  font-size: 18px;
  text-align: center;
`;
