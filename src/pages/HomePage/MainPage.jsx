//예라
import Header from "../../components/Main/Header";
import Menu from "../../components/Main/Menu";
import DropdownMenu from "../../components/Main/DropdownMenu";
import Main from "../../components/Main/Main";
import SelectDropdown from "../../components/Main/SelectDropdown";

function MainPage() {
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
          <Main />
        </div>
      </div>
    </>
  );
}

export default MainPage;
