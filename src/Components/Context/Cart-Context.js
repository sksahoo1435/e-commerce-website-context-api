import React from 'react';

const CartContext = React.createContext({
    cartData:[],
    totalAmount:0,
    AddItem:(item)=>{},
    RemoveItem:(id)=>{}
});

export default CartContext;