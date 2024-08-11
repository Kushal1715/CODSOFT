import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              path="/"
              element={
                <>
                  <Home /> <About /> <Skills /> <Projects /> <Contact />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>

      {/* <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact /> */}
    </>
  );
}

export default App;
