import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const CartItem = ({ id, name, price, img }) => {
  const dispatch = useDispatch();

  const removeCartProduct = (id) => {
    dispatch(cartActions.deleteCartItem(id));
  };

  return (
    <div className="flex border-b pb-4 mb-4 relative">
      {/* Product Image */}
      <div className="w-1/4">
        <img src={img} alt={name} className="w-full h-auto object-cover" />
      </div>

      {/* Product Details */}
      <div className="w-3/4 pl-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <div className="flex">
            <p className="text-gray-500 mr-2">Rs.{Math.ceil(price) * 135}</p>
            <p className=" font-bold text-gray-500 line-through">
              Rs. {Math.ceil(1000 / 100 + price) * 135}
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-2">14 days return available</p>
        </div>
        <p className="text-sm text-gray-500">Delivered by 15 Oct</p>
      </div>

      {/* Remove Button */}
      <div
        className="absolute top-0 right-4 cursor-pointer"
        onClick={() => removeCartProduct(id)}
      >
        <GrClose size={24} />
      </div>
    </div>
  );
};

export default CartItem;
