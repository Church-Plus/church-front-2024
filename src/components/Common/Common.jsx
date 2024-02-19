//버튼이나 공통 UI스타일
//예라

import styled from "styled-components";

//배경 적용
export const BackgroundWrapper = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='2915' fill='none'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23fff' d='M0 0h1920v2915H0z'/%3E%3Cg filter='url(%23b)'%3E%3Cpath fill='%238C8BDA' fill-opacity='.3' d='M1464 2851c0 435.75-353.25 789-789 789-435.753 0-789-353.25-789-789s353.247-789 789-789c435.75 0 789 353.25 789 789Z'/%3E%3C/g%3E%3Cg filter='url(%23c)'%3E%3Cpath fill='%239B9AFF' fill-opacity='.4' d='M1847 969.5c0 225.61-182.89 408.5-408.5 408.5S1030 1195.11 1030 969.5c0-225.608 182.89-408.5 408.5-408.5S1847 743.892 1847 969.5Z'/%3E%3C/g%3E%3Cg filter='url(%23d)'%3E%3Cpath fill='%23ADACFF' fill-opacity='.3' d='M588 588c0 261.783-212.217 474-474 474s-474-212.217-474-474 212.217-474 474-474 474 212.217 474 474Z'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='b' width='5578' height='5578' x='-2114' y='62' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur result='effect1_foregroundBlur_648_8445' stdDeviation='1000'/%3E%3C/filter%3E%3Cfilter id='c' width='2817' height='2817' x='30' y='-439' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur result='effect1_foregroundBlur_648_8445' stdDeviation='500'/%3E%3C/filter%3E%3Cfilter id='d' width='3348' height='3348' x='-1560' y='-1086' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur result='effect1_foregroundBlur_648_8445' stdDeviation='600'/%3E%3C/filter%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h1920v2915H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  height: 100;
`;

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
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const Input = styled.div`
  padding-top: 20px;
  font-size: 18px;
  text-align: center;
`;
