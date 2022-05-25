import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import MainPage from "./pages/homePage/MainPage";
import PopularRoute from "./pages/homePage/PopularRoute";
import "./asset/css/components.css";
import TicketPage from "./pages/ticketPage/TicketPage";
import PaymentPage from "./pages/paymentPage/PaymentPage";
import ScrollToTop from "./components/functionComponent/ScrollToTop";

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
          <Route path="/ticket" element={<TicketPage />}></Route>
          <Route path="/payment" element={<PaymentPage />}></Route>
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
