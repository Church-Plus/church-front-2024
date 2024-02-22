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
  BackgroundWrapper,
} from "../../components/Common/Common";
import { useNavigate, useParams, Link } from "react-router-dom";
import CreateFolderModal from "../../components/Modal/CreateFolderModal";
import FolderEdit from "../../assets/Icons/FolderEdit.svg";
import SwitchToggle from "../../components/Common/SwitchToggle";

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
      <BackgroundWrapper style={{ display: "flex" }}>
        <div>
          <Menu />
          <DropdownMenu />
        </div>
        <Wrapper
          style={{
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "800px",
            }}
          >
            <Smallbox>{month}월</Smallbox>
          </div>
          <Box>
            <FolderContainer>
              <CreateFolderModal handleAddFolder={handleAddFolder} />
              {folders.map((folder) => (
                <Link
                  key={folder.id}
                  to={`/monthPage/${month}/${folder.content}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div>
                    <FolderTop />
                    <FolderBox>
                      <img
                        src={FolderEdit}
                        alt="폴더 수정"
                        style={{
                          width: "20px",
                          height: "20px",
                          paddingTop: "25px",
                          paddingRight: "25px",
                        }}
                      />
                    </FolderBox>
                    <Input>{folder.content}</Input>
                  </div>
                </Link>
              ))}
            </FolderContainer>
          </Box>
        </Wrapper>

        <div style={{ paddingRight: "2.5rem" }}>
          <SwitchToggle />
        </div>
      </BackgroundWrapper>
    </>
  );
}

export default MonthPage;
