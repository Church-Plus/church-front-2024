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
import axios from "axios";
import SelectUpdateDelete from "../../components/Common/SelectUpdateDelete";

function MonthPage() {
  const params = useParams();
  const navigate = useNavigate();
  const month = Number(params.month);
  const [folders, setFolders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [reloadPage, setReloadPage] = useState(false); // 상태 추가

  useEffect(() => {
    navigate(`/monthPage/${month}`);
    fetchData();
  }, [month, navigate]);

  useEffect(() => {
    if (reloadPage) {
      fetchData();
      setReloadPage(false);
    }
  }, [reloadPage]);

  const fetchData = async () => {
    try {
      const serverResponse = await axios.get(
        `https://api.zionhann.shop/app/churchplus/church+/folder/list/${month}`
      );
      setFolders(serverResponse.data.folders);
      console.log("serverResponse:", serverResponse);
    } catch (error) {
      console.error("폴더 불러오기 실패:", error);
      setFolders([]);
    }
  };

  const handleAddFolder = (folders) => {
    setIsModalOpen(false);
    setNewFolderName(folders.folderName);
    setReloadPage(true);
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
              {folders.length > 0 ? (
                folders.map((folder, index) => (
                  <div key={index}>
                    <Link
                      to={`/monthPage/${month}/${folder.folderName}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <FolderTop />
                    </Link>
                    <FolderBox>
                      <SelectUpdateDelete />
                    </FolderBox>

                    <Input>{folder.folderName}</Input>
                  </div>
                ))
              ) : (
                <div key="no-folder">폴더가 없습니다.</div>
              )}
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
