import React from "react";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartProducts = useSelector((store) => store.cart);
  const products = useSelector((store) => store.products);

  const carts = products.filter((product) => {
    return cartProducts.indexOf(product.id) >= 0;
  });

  return (
    <div className="flex px-[80px] py-[30px] gap-8">
      <div className="w-2/3">
        <div className="border-2 p-4 space-y-4">
          {carts.map((cart) => {
            return (
              <CartItem
                key={cart.id}
                id={cart.id}
                name={cart.title}
                price={cart.price}
                img={cart.thumbnail}
                returnPolicy="14 days return available"
                deliveryDate="30 Aug 2024"
              />
            );
          })}
        </div>
      </div>
      <div className="w-1/3 border-2 p-4">
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
