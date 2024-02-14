//예라
import React from "react";
import Header from "../../components/Main/Header";
import Menu from "../../components/Main/Menu";
import DropdownMenu from "../../components/Main/DropdownMenu";

function FirstMainPage() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div>
          <Menu />
          <DropdownMenu />
        </div>
        {/* <Main /> 새로 만들 예정~ */}
      </div>
    </>
  );
}

export default FirstMainPage;
