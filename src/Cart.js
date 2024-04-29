import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

function Cart() {
  const { state, dispatch } = useCart();
  const totalAmount = state.cart.reduce((acc, item) => acc + item.amount * item.price, 0);

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <h2>Cart Items</h2>
      {state.cart.length === 0 ? (
        <p>Cart is currently empty</p>
      ) : (
        <div id="cart-items-list">
          {state.cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
      <p id="cart-total-amount">Total: ${totalAmount.toFixed(2)}</p>
      <button id="clear-all-cart" onClick={handleClearCart}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
