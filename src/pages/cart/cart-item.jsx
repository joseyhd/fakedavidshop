import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = ({ data }) => {
  const { id, title, price, image } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  const quantity = cartItems[id];
  const itemSubtotal = (quantity * price).toFixed(2);

  return (
    <div className="cartItem">
      <img src={image} alt={title} />
      <div className="description">
        <p><b>{title}</b></p>
        <p>Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={quantity}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            type="number"
            min="0"
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
      <div className="item-subtotal">
        <p>Subtotal:</p>
        <p>${itemSubtotal}</p>
      </div>
    </div>
  );
};

