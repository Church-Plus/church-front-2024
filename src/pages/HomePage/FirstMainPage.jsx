//예라
import React from "react";
import Header from "../../components/Main/Header";
import Menu from "../../components/Main/Menu";
import DropdownMenu from "../../components/Main/DropdownMenu";
import SelectDropdown from "../../components/Main/SelectDropdown";
import FirstMain from "../../components/Main/FirstMain";

function FirstMainPage() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div>
          <Menu />
          <DropdownMenu />
        </div>
        <div>
          <SelectDropdown />
          <FirstMain />
        </div>
      </div>
    </>
  );
}

export default FirstMainPage;
