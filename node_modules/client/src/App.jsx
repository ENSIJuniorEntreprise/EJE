import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { News } from "./pages/news/News";
import  Contact from "./pages/contact/Contact";
import { About } from "./pages/about us/About";
import Events from "./pages/events/Events";
import { Services } from "./pages/services/Services";
import { Article } from "./pages/news/Article/Article";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import { Login } from "./pages/login/Login";
import Dash from "./pages/Dash";
import RequireAuth from "./RequireAuth";
import PersistLogin from "./components/Persistlogin";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);

  const showNavbarNewsletterFooter = () => {
    return location.pathname !== "/dash";
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {showNavbarNewsletterFooter() && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Login />} />
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route path="/dash" element={<Dash />} />
              </Route>
            </Route>
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/article" element={<Article />} />
            <Route path="/events" element={<Events />} />
            <Route path="/services" element={<Navigate to="/services/0" />} />
            <Route path="/services/:serviceId" element={<Services />} />
            <Route path="*" element={<div>404 not found</div>} />
          </Routes>
          {showNavbarNewsletterFooter() && <Newsletter />}
          {showNavbarNewsletterFooter() && <Footer />}
        </div>
      )}
    </div>
  );
}

export default App;
