import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Footer from "./components/footer/Footer";
import History from "./components/Pages/History";
// import Loginsignup from "./components/loginsignup/Loginsignup";
import LoginPage from "./components/log/LoginPage";
import RegisterPage from "./components/register/RegisterPage";


// import Image from "./components/images/Image";

function App() {
  return (
    <>
      <Router>
        <NavBar />
{/* <Image /> */}
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/message" element={<About />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/notification" element={<About />} />
            <Route path="/setting" element={<About />} />
            <Route path="/calls" element={<About />} />
            <Route path="/search" element={<About />} />
            <Route path="/help" element={<About />} />





            <Route path="/login" element={<LoginPage  />} />
            <Route path="/register" element={<RegisterPage/>} />

           



          </Routes>
        </div>
        <Footer />
      </Router>
  </>
  );
}

export default App;
