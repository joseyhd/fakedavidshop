import React, { useEffect, useState } from "react";
import { Product } from "./product";


export const Shop = () => {
  const [products, setProducts] = useState([]);

  // Fetch de la FakeStore API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>DavidShop</h1>
      </div>
      <div className="products">
        {products.length > 0 ? (
          products.map((product) => <Product key={product.id} data={product} />)
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};
