import React, { useState, useEffect } from "react";
import Header from "../../components/Main/Header";
import Menu from "../../components/Main/Menu";
import DropdownMenu from "../../components/Main/DropdownMenu";
import {
  Wrapper,
  Smallbox,
  Box,
  FolderContainer,
  FolderTop,
  FolderBox,
  Input,
} from "../../components/Common/Common";
import { useNavigate, useParams, Link } from "react-router-dom";
import CreateFolderModal from "../../components/Modal/CreateFolderModal";

function MonthPage() {
  const params = useParams();
  const navigate = useNavigate();
  const month = Number(params.month);
  const [folders, setFolders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  useEffect(() => {
    navigate(`/monthPage/${month}`);
  }, [month, navigate]);

  const handleAddFolder = (folderName) => {
    const newFolder = {
      id: folders.length + 1, // 현재 폴더 개수에 1을 더한 값으로 id 설정
      content: folderName, // 새로운 폴더 내용
    };
    setFolders([newFolder, ...folders]);
    setIsModalOpen(false);
    setNewFolderName(folderName);
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
              {/* <AddBtn type="submit" onClick={handleAddFolder}>
                {" "}
                <img src={addIcon} alt="사진추가 아이콘" />
              </AddBtn> */}

              <CreateFolderModal handleAddFolder={handleAddFolder} />
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
