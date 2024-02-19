//예라
import React from "react";
import Header from "../../components/Main/Header";
import Menu from "../../components/Main/Menu";
import DropdownMenu from "../../components/Main/DropdownMenu";
import SelectDropdown from "../../components/Main/SelectDropdown";
import FirstMain from "../../components/Main/FirstMain";
import SwitchToggle from "../../components/Common/SwitchToggle";
import { BackgroundWrapper } from "../../components/Common/Common";

function FirstMainPage() {
  return (
    <>
      <Header />
      <BackgroundWrapper style={{ display: "flex" }}>
        <div>
          <Menu />
          <DropdownMenu />
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <SelectDropdown />
            <div style={{ marginLeft: "31rem" }}>
              <SwitchToggle />
            </div>
          </div>
          <FirstMain />
        </div>
      </BackgroundWrapper>
    </>
  );
}

export default FirstMainPage;
