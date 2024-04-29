import React from 'react';
import { useCart } from './CartContext';

function Navbar() {
  const { state } = useCart();
  const totalItems = state.cart.reduce((acc, item) => acc + item.amount, 0);
  return (
    <nav>
      <h1>useReducer</h1>
      <div id="nav-cart-item-count">{totalItems}</div>
    </nav>
  );
}

export default Navbar;
