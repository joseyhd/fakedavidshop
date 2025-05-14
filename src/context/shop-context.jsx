import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  // Obtener productos desde FakeStore API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);

      // Inicializar carrito con cantidad 0 para cada producto
      const defaultCart = {};
      data.forEach((product) => {
        defaultCart[product.id] = 0;
      });
      setCartItems(defaultCart);
    };

    fetchProducts();
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = products.find((p) => p.id === Number(itemId));
        if (itemInfo) {
          totalAmount += cartItems[itemId] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
