import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import MainPage from "./pages/homePage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header></Header>}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/ticket" element={<MainPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
