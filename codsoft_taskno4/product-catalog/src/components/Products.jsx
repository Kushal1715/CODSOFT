import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);

  const fetchProducts = async () => {
    const url = await fetch(
      `https://dummyjson.com/products?limit=${10}&skip=${skip}`
    );
    const data = await url.json();
    console.log(data.products);
    setProducts(data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, [skip]);

  const fetchNextProducts = () => {
    setSkip(skip + 10);
  };
  const fetchPrevProducts = () => {
    setSkip(skip - 10);
  };
  return (
    <div className="px-[80px] mt-[30px]">
      <div className="flex justify-center items-center mb-[20px]">
        <h1 className="text-4xl text-orange-500">All Products</h1>
      </div>
      <div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                img={product.thumbnail}
                name={product.title}
                price={product.price}
              />
            );
          })}
        </div>
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
