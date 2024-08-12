import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[80px] w-full h-[65px] bg-orange-400 text-black">
      <div className="text-2xl font-bold ">
        <h1>Product Catalog</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="search products..."
          className="px-3 py-1 rounded-xl w-[300px]"
        />
      </div>
      <div>
        <FaShoppingCart size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
