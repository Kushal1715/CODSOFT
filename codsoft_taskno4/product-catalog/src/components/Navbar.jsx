import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[80px] w-full h-[65px] bg-orange-400 text-black">
      <div className="text-2xl font-bold ">
        <Link to="/">
          <h1>Product Catalog</h1>
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="search products..."
          className="px-3 py-1 rounded-xl w-[300px]"
        />
      </div>
      <div>
        <Link to="/cart">
          <FaShoppingCart size={25} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
