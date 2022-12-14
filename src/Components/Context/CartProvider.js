import React from 'react';
import CartContext from './Cart-Context';

const CartProvider = (props) => {

  return (
    <CartContext.Provider value="hii this is sunil">
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider