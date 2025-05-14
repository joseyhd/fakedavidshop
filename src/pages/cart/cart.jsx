import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { products, cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const hasItems = Object.values(cartItems).some((amount) => amount > 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      {hasItems ? (
        <div className="cart-content">
          <div className="cart-items">
            {products.map((product) =>
              cartItems[product.id] > 0 ? (
                <CartItem key={product.id} data={product} />
              ) : null
            )}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <p className="subtotal">Subtotal: ${totalAmount.toFixed(2)}</p>
            <button className="continue-btn" onClick={() => navigate("/")}>Continue Shopping</button>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button onClick={() => navigate("/")}>Go Back to Shopping</button>
        </div>
      )}
    </div>
  );
};
