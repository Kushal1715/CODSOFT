import React, { useState } from "react";

const ProductCard = ({ img, name, price }) => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="border-2 border-gray-400 p-2 h-[468px]">
      <div
        className="w-full border-2 border-orange-400 p-2 flex flex-col"
        onMouseEnter={() => setShowCart(true)}
        onMouseLeave={() => setShowCart(false)}
      >
        <img src={img} className="w-full mb-2 cursor-pointer" />
        {showCart && (
          <button className="bg-orange-400 px-3 py-2 rounded-xl">
            Add to cart
          </button>
        )}
      </div>
      <div className="p-3">
        <p className=" font-bold w-[310px] mb-2">{name}</p>
        <div className="flex">
          <p className=" font-bold mr-2">Rs. {Math.ceil(price)}</p>
          <p className=" font-bold text-gray-500 line-through">
            Rs. {Math.ceil(10000 / 100 + price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
