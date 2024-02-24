import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import EditPencilIcons from "../../assets/Icons/editpencil.svg";
import BinIcons from "../../assets/Icons/bin.svg";
import DeleteFileModal from "../Modal/DeleteFileModal";
import UPdateFileModal from "../Modal/UPdateFileModal";

const DropdownWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 200px;
  box-shadow: 2px 2px 2px 2px grey;
  z-index: 3;
`;

const EditDropdown = styled.img`
  margin-top: 25px;
`;

function FileNameEditButton({
  musicId,
  musicName,
  folderId,
  code,
  description,
  link,
  musicImageUrl,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setShowDropdown(!showDropdown);
    console.log("musicId:", musicId);
  };

  const handleDropdownItemClick = () => {
    setShowDropdown(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
    setShowDropdown(false); // FolderDeleteModal을 클릭했을 때도 드롭다운 메뉴 닫기
  };

  return (
    <div>
      <div>
        <EditDropdown
          onClick={handleClick}
          src={EditPencilIcons}
          alt="수정 아이콘"
        />

        {showDropdown && (
          <DropdownWrapper ref={dropdownRef}>
            <DeleteFileModal musicId={musicId} />
            <UPdateFileModal
              musicId={musicId}
              folderId={folderId}
              musicName={musicName}
              code={code}
              description={description}
              link={link}
              musicImageUrl={musicImageUrl}
            />
          </DropdownWrapper>
        )}
      </div>
    </div>
  );
}

export default FileNameEditButton;
