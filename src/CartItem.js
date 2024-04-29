import React from 'react';
import { useCart } from './CartContext';

function CartItem({ item }) {
  const { dispatch } = useCart();

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT_AMOUNT', payload: item });
  };

  const handleDecrement = () => {
    if (item.amount === 1) {
      handleRemove();
    } else {
      dispatch({ type: 'DECREMENT_AMOUNT', payload: item });
    }
  };

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <p id={`cart-item-price-${item.id}`}>${item.price}</p>
        <button id={`increment-btn-${item.id}`} onClick={handleIncrement}>
          +
        </button>
        <p id={`cart-amount-${item.id}`}>{item.amount}</p>
        <button id={`decrement-btn-${item.id}`} onClick={handleDecrement}>
          -
        </button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
