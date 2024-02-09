import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import HomePage from "./pages/home-page/home-page";
import Footer from "./components/footer/footer";
import AboutUs from "./pages/about-us/about-us";
import LoginModal from "./components/login-auth/login";
import { useState } from "react";
import AuthModal from "./components/login-auth/auth";
import Training from "./pages/training/training";
import Recipes from "./pages/recipes/recipes";
import Blog from "./pages/blog/blog";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  return (
    <div className="page_wrapper">
      <NavBar setLoginModal={setLoginModal} setAuthModal={setAuthModal} />
      {loginModal ? (
        <LoginModal setLoginModal={setLoginModal} setAuthModal={setAuthModal} />
      ) : (
        ""
      )}
      {authModal ? (
        <AuthModal setLoginModal={setLoginModal} setAuthModal={setAuthModal} />
      ) : (
        ""
      )}

      <div className="page_content">
        <Routes>
          <Route path="/" element={<HomePage setAuthModal={setAuthModal} />} />
          <Route
            path="/about-us"
            element={<AboutUs setAuthModal={setAuthModal} />}
          />
          <Route path="/training" element={<Training />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
