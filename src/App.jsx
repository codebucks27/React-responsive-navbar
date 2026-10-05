import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home.jsx";
import { About } from "./components/Pages/About.jsx";
import { Blog } from "./components/Pages/Blog.jsx";
import { Contact } from "./components/Pages/Contact.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
