import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const cartProducts = useSelector((store) => store.cart);
  const products = useSelector((store) => store.products);

  const carts = products.filter((product) => {
    return cartProducts.indexOf(product.id) >= 0;
  });

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
          <span className="absolute top-2 right-[70px] border-2 rounded-full border-red-500 bg-red-500 text-white">
            {carts.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
