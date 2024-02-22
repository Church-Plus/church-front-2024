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
// import getFolder from "../../apis/getFolder";
import axios from "axios";

function MonthPage() {
  const params = useParams();
  const navigate = useNavigate();
  const month = Number(params.month);
  const [folders, setFolders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverResponse = await axios.get(
          `https://api.zionhann.shop/app/churchplus/church+/folder/list/${month}`
        );

        console.log("폴더가 정상적으로 불러와짐", serverResponse);

        setFolders(serverResponse.data.folders);
      } catch (error) {
        console.error("폴더 불러오기 실패:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddFolder = (folders) => {
    const newFolder = {
      id: folders.folderId, // 현재 폴더 개수에 1을 더한 값으로 id 설정
      content: folders.folderName, // 새로운 폴더 내용
    };
    console.log(folders);
    setFolders([newFolder, ...folders]);
    setIsModalOpen(false);
    setNewFolderName(folders.folderName);
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
                <Input>폴더 이름</Input>
              </div>
              {folders.map((folder) => (
                <Link
                  key={folder.folderId}
                  to={`/monthPage/${month}/${folder.folderName}`}
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
                    <Input key={folder.folderId}>{folder.folderName}</Input>
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
