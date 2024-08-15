import Navbar from "./components/Navbar";
import MainLayout from "./MainLayout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
