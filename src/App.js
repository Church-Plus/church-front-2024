import "./App.css";
import FolderPage from "./pages/HomePage/FolderPage";
import MonthPage from "./pages/HomePage/MonthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MonthPage" element={<MonthPage />}></Route>
        <Route path="/MonthPage/:month" element={<MonthPage />}></Route>
        <Route
          path="/MonthPage/:month/:content"
          element={<FolderPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
