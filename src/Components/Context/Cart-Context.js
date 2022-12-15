import React from "react";


const CartContext = React.createContext({
    cartData: [],
    totalAmount: 0,
    totalQuantity: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    clearCart:(id)=>{}
});

export default CartContext;