import "./App.css";
import FolderPage from "./pages/HomePage/FolderPage";
import MonthPage from "./pages/HomePage/MonthPage";
import FirstMainPage from "./pages/HomePage/FirstMainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 로그인을 사용할 경우
// import Loading from "./pages/LoginPage/Loading";
// import GoogleLogin from "./pages/LoginPage/GoogleLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstMainPage />}></Route>
        <Route path="/MonthPage" element={<MonthPage />}></Route>
        <Route path="/MonthPage/:month" element={<MonthPage />}></Route>
        <Route
          path="/MonthPage/:month/:content"
          element={<FolderPage />}
        ></Route>
        {/* <Route path="/" element={<GoogleLogin />}></Route>
        <Route path="/loading" element={<Loading />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
