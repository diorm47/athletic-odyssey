import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import HomePage from "./pages/home-page/home-page";
import Footer from "./components/footer/footer";
import AboutUs from "./pages/about-us/about-us";

function App() {
  return (
    <div className="page_wrapper">
      <NavBar />

      <div className="page_content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
