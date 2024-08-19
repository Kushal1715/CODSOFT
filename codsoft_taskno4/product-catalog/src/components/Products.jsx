import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/productsSlice";
import { skipActions } from "../store/skipSlice";
import { loadingActions } from "../store/loadingSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const skip = useSelector((store) => store.skip);
  const loading = useSelector((store) => store.loading);

  const fetchProducts = async () => {
    try {
      dispatch(loadingActions.fetchingProducts());

      const url = await fetch(
        `https://dummyjson.com/products?limit=${10}&skip=${skip}`
      );

      const data = await url.json();

      dispatch(productsActions.addInitialProducts(data.products));
      dispatch(loadingActions.fetchingDone());
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [skip]);

  const fetchNextProducts = () => {
    dispatch(skipActions.increaseSkip());
  };
  const fetchPrevProducts = () => {
    dispatch(skipActions.decreaseSkip());
  };
  return (
    <div className="px-[80px] mt-[30px]">
      <div className="flex justify-center items-center mb-[20px]">
        <h1 className="text-4xl text-orange-500">All Products</h1>
      </div>
      <div>
        {loading ? (
          <h1 className="text-center text-4xl">Loading...</h1>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-4">
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  img={product.thumbnail}
                  name={product.title}
                  price={product.price}
                  rating={product.rating}
                />
              );
            })}
          </div>
        )}

        <div className="flex justify-between items-center mt-[20px] mb-[20px]">
          <button
            className="px-3 py-2 bg-gray-600 text-white flex items-center justify-center"
            onClick={fetchPrevProducts}
            disabled={skip === 0}
          >
            <BiSolidLeftArrow />
            <p className="ml-2">Previous</p>
          </button>
          <button
            className="px-3 py-2 bg-gray-600 text-white flex items-center justify-center"
            onClick={fetchNextProducts}
          >
            <p className="mr-2">Next</p>
            <BiSolidRightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
