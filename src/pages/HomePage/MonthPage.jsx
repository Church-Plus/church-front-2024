import React, { useEffect } from "react";
import Header from "../../components/Main/Header";
import Menu from "../../components/Main/Menu";
import DropdownMenu from "../../components/Main/DropdownMenu";
import {
  Wrapper,
  Smallbox,
  Box,
  FolderContainer,
  AddBtn,
  FolderTop,
  FolderBox,
  Input,
} from "../../components/Common/Common";
import addIcon from "../../assets/Icons/add.svg";
import { useNavigate, useParams } from "react-router-dom";

function MonthPage() {
  const params = useParams();
  const navigate = useNavigate();
  const month = Number(params.month);

  useEffect(() => {
    navigate(`/monthPage/${month}`);
  }, [month, navigate]);

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div>
          <Menu />
          <DropdownMenu />
        </div>
        <Wrapper>
          <Smallbox>{month}월</Smallbox>
          <Box>
            <FolderContainer>
              <AddBtn type="submit">
                {" "}
                <img src={addIcon} alt="사진추가 아이콘" />
              </AddBtn>
              <div>
                <FolderTop />
                <FolderBox />
                <Input>2024년|02월|12일|총5곡</Input>
              </div>
              {/* 폴더 자동정렬 확인용 */}
              <div>
                <FolderTop />
                <FolderBox />
                <Input>2024년|02월|11일|총3곡</Input>
              </div>
              <div>
                <FolderTop />
                <FolderBox />
                <Input>2024년|01월|06일|총8곡</Input>
              </div>
            </FolderContainer>
          </Box>
        </Wrapper>
      </div>
    </>
  );
}

export default MonthPage;
