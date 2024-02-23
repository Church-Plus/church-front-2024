//예라
import React, { useState } from "react";
import Header from "../../components/Main/Header";
import Menu from "../../components/Main/Menu";
import DropdownMenu from "../../components/Main/DropdownMenu";
import SelectDropdown from "../../components/Main/SelectDropdown";
import FirstMain from "../../components/Main/FirstMain";
import SwitchToggle from "../../components/Common/SwitchToggle";
import { BackgroundWrapper } from "../../components/Common/Common";
import styled from "styled-components";

const ToggleLocation = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  padding-right: 2.5rem;
`;

function FirstMainPage() {
  const [searchMusicName, setSearchMusicName] = useState("");

  return (
    <>
      <Header setSearch={setSearchMusicName} />
      <BackgroundWrapper style={{ display: "flex" }}>
        <div>
          <Menu />
          <DropdownMenu />
        </div>
        <div>
          <SelectDropdown />
          <FirstMain searchMusicName={searchMusicName} />
        </div>
        <ToggleLocation>
          <SwitchToggle initialToggled={true} />
        </ToggleLocation>
      </BackgroundWrapper>
    </>
  );
}

export default FirstMainPage;
