import React, { useState, useEffect } from "react";
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
import { useNavigate, useParams, Link } from "react-router-dom";

function MonthPage() {
  const params = useParams();
  const navigate = useNavigate();
  const month = Number(params.month);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    navigate(`/monthPage/${month}`);
  }, [month, navigate]);

  const handleAddFolder = () => {
    const newFolder = {
      id: folders.length + 1, // 현재 폴더 개수에 1을 더한 값으로 id 설정
      content: `새 폴더`, // 새로운 폴더 내용
    };
    setFolders([newFolder, ...folders]);
  };

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
              <AddBtn type="submit" onClick={handleAddFolder}>
                {" "}
                <img src={addIcon} alt="사진추가 아이콘" />
              </AddBtn>

              {folders.map((folder) => (
                <Link
                  key={folder.id}
                  to={`/monthPage/${month}/${folder.content}`}
                >
                  <div>
                    <FolderTop />
                    <FolderBox />
                    <Input>{folder.content}</Input>
                  </div>
                </Link>
              ))}
            </FolderContainer>
          </Box>
        </Wrapper>
      </div>
    </>
  );
}

export default MonthPage;
