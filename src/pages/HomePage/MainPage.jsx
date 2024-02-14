//예라
import React from "react";
import Header from "../../components/Main/Header";
import Menu from "../../components/Main/Menu";
import DropdownMenu from "../../components/Main/DropdownMenu";
import Main from "../../components/Main/Main";

function MainPage() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div>
          <Menu />
          <DropdownMenu />
        </div>
        <Main />
      </div>
    </>
  );
}

export default MainPage;
