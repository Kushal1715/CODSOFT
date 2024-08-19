import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const ProductCard = ({ id, img, name, price, rating }) => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch(cartActions.addCartItem(id));
  };
  return (
    <div className="border-2 border-gray-400 p-2 h-[476px]">
      <div
        className="w-full border-2 border-orange-400 p-2 flex flex-col"
        onMouseEnter={() => setShowCart(true)}
        onMouseLeave={() => setShowCart(false)}
      >
        <img src={img} className="w-full cursor-pointer" />
        <div className="flex items-center mb-1">
          <p className="text-sm font-bold mr-1">{rating}</p>
          <FaStar className="text-yellow-400" />
        </div>
        {showCart && (
          <button
            className="bg-orange-400 px-3 py-2 rounded-xl"
            onClick={() => addToCart(id)}
          >
            Add to cart
          </button>
        )}
      </div>
      <div className="p-3">
        <p className=" font-bold w-[310px] mb-2">{name}</p>
        <div className="flex">
          <p className=" font-bold mr-2">Rs. {Math.ceil(price) * 135}</p>
          <p className=" font-bold text-gray-500 line-through">
            Rs. {Math.ceil(1000 / 100 + price) * 135}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
