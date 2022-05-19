import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./layouts/footer/Footer";
import Header from "./layouts/Header";
import MainPage from "./pages/homePage/MainPage";
import PopularRoute from "./pages/homePage/PopularRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header></Header>}>
          <Route
            path="/"
            element={
              <>
                <MainPage />
                <PopularRoute />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/ticket" element={<MainPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
