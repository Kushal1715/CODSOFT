import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <div className="fixed w-full h-[80px] bg-[#0a192f] flex justify-between items-center px-[80px] text-white">
      {/* logo  */}
      <p className="text-3xl text-cyan-400">Kushal</p>
      {/* list items  */}
      <ul className="hidden md:flex text-2xl">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/skills"}>
          <li>Skills</li>
        </Link>
        <Link to={"/projects"}>
          <li>Projects</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>

      {/* hamburger  */}
      <div className="md:hidden z-10 text-2xl" onClick={toggleHamburger}>
        {hamburger ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={`${
          hamburger
            ? "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
            : "hidden"
        }`}
      >
        <Link to={"/"}>
          <li className="text-4xl py-4" onClick={() => setHamburger(false)}>
            Home
          </li>
        </Link>
        <Link to={"/about"}>
          <li className="text-4xl py-4" onClick={() => setHamburger(false)}>
            About
          </li>
        </Link>
        <Link to={"/skills"}>
          <li className="text-4xl py-4" onClick={() => setHamburger(false)}>
            Skills
          </li>
        </Link>
        <Link to={"/projects"}>
          <li className="text-4xl py-4" onClick={() => setHamburger(false)}>
            Projects
          </li>
        </Link>
        <Link to={"/contact"}>
          <li className="text-4xl py-4" onClick={() => setHamburger(false)}>
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
