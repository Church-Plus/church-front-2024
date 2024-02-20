import "./App.css";
// 로그인 페이지
import Loading from "./pages/LoginPage/Loading";
import GoogleLogin from "./pages/LoginPage/GoogleLogin";

import InputTeamName from "./pages/CreateTeamPage/InputTeamName";
import InputName from "./pages/CreateTeamPage/InputName";
import SelectPosition from "./pages/CreateTeamPage/SelectPosition";
import FolderPage from "./pages/HomePage/FolderPage";
import MonthPage from "./pages/HomePage/MonthPage";

// import FirstMainPage from "./pages/HomePage/FirstMainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectUpdateDelete from "./components/Common/SelectUpdateDelete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectUpdateDelete />}></Route>
        <Route path="/MonthPage" element={<MonthPage />}></Route>
        <Route path="/MonthPage/:month" element={<MonthPage />}></Route>
        <Route
          path="/MonthPage/:month/:content"
          element={<FolderPage />}
        ></Route>

        <Route path="/login" element={<GoogleLogin />}></Route>
        <Route path="/loading" element={<Loading />}></Route>

        <Route path="/CreateTeam" element={<InputTeamName />}></Route>
        <Route path="/CreateName" element={<InputName />}></Route>
        <Route path="/CreatePosition" element={<SelectPosition />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
