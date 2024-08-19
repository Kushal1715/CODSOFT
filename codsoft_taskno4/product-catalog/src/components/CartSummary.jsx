import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const products = useSelector((store) => store.products);
  const cartIds = useSelector((store) => store.cart);

  const cartProducts = products.filter((product) =>
    cartIds.includes(product.id)
  );

  // Calculating total MRP and discount
  let totalMRP = 0;
  cartProducts.forEach((product) => {
    totalMRP += Math.ceil(product.price * 135) + 1350 + 1;
  });
  let discount = 1350 * cartProducts.length;
  let totalAmount = totalMRP - discount;

  return (
    <div className="p-4 border rounded-lg space-y-4 bg-white shadow-md">
      <h2 className="text-xl font-semibold">
        Price Details ({cartProducts.length} items)
      </h2>
      <div className="flex justify-between">
        <p>Total MRP</p>
        <p>Rs.{totalMRP}</p>
      </div>
      <div className="flex justify-between text-green-600">
        <p>Discount on MRP</p>
        <p>Rs.{discount}</p>
      </div>

      <hr />
      <div className="flex justify-between text-lg font-bold">
        <p>Total Amount</p>
        <p>Rs.{totalAmount}</p>
      </div>
      <button className="w-full py-2 mt-4 bg-red-500 text-white font-semibold rounded-lg">
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;
