import { useState } from "react";
import CartContext from "../Context/Cart-Context";


const CartProvider = (props) => {
  const [items, setItems] = useState([])

  const addItemToCartHandler = (product) => {
    const newArray = [...items]
    let hasItems = false
    newArray.forEach((item, index) => {
      if (item.id === product.id) {
        hasItems = true
        newArray[index].quantity = Number(newArray[index].quantity) + Number(product.quantity);
      }
    })
    if (hasItems) {
      setItems(newArray)
    } else {
      setItems([...items, product])
    }
  };
  const removeItemToCartHandler = (id) => {
    const newArray = [...items]
    let hasItems = false
    newArray.forEach((item, index) => {
      if (item.id === id && item.quantity === 1) {
        hasItems=true
        const temp = newArray.splice(index, 1)
        setItems(temp)
      }
      else if (item.id === id) {
        newArray[index].quantity = Number(newArray[index].quantity) - 1;
      }
    })

    if(hasItems)
    {
      setItems(newArray)
    }else{
      setItems([...items])
    }

  };
  const clearCartItem=(id)=>{
    if (items.length <=0) {
      alert("There is no items to purchase!!!")
    }else{
      alert("Thanks for purchaseing the item !!!")
      setItems([...[]])
    }
    
  };

  // console.log(items)
  const cartContext = {
    cartData: items,
    totalAmount: items.reduce((ack, item) => item.quantity * Number(item.price) + ack, 0),
    totalQuantity: items.reduce((ack, item) => item.quantity + ack, 0),
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartItem
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;