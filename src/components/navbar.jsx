import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  // Calcular total de ítems en el carrito
  const totalItems = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart" className="cart-link">
          <ShoppingCart size={32} />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </div>
  );
};
