import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <div className="fixed w-full h-[80px] bg-black flex justify-between items-center px-4 text-white">
      {/* logo  */}
      <p className="text-3xl text-red-500">Kushal</p>
      {/* list items  */}
      <ul className="hidden md:flex text-2xl">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>

      {/* hamburger  */}
      <div className="md:hidden z-10" onClick={toggleHamburger}>
        {hamburger ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={`${
          hamburger
            ? "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
            : "hidden"
        }`}
      >
        <li className="text-4xl py-4">Home</li>
        <li className="text-4xl py-4">About</li>
        <li className="text-4xl py-4">Skills</li>
        <li className="text-4xl py-4">Project</li>
        <li className="text-4xl py-4">Contact</li>
      </ul>

      {/* social icons  */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
