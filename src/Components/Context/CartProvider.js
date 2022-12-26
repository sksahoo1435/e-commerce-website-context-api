import {  useContext, useEffect, useState } from "react";
import CartContext from "../Context/Cart-Context";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartProvider = (props) => {

  const [items, setItems] = useState([])

  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const [email,setEmail] =useState('');

  const userIsLoggedIn = !!token;

  const EmailToUse= cartCtx.Email.replace(/\W/g, '')
  console.log(EmailToUse)
  const url = `https://crudcrud.com/api/4200cde70b014a798f6579b59de7f345/cart${EmailToUse}`;

  const fetchHandler = async () => {    
    const response = await axios.get(url)
    setItems(response.data)

  }

  const loginHandler = (token,email) => {
    setToken(token);
    setEmail(email);
    
  }

  

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate('/')
  }

  const addItemToCartHandler = (product) => {
    const newArray = [...items]
    let hasItems = false
    newArray.forEach((item, index) => {
      if (item.id === product.id) {
        console.log("existing item", product.id)
        hasItems = true
        items[index].quantity = Number(items[index].quantity) + Number(product.quantity);

        console.log("this is the second value", items[index]._id)
        console.log(newArray)
        const x = Number(newArray[index].quantity) + Number(product.quantity) - 1;
        const objItem = {
          id: product.id,
          image: product.image,
          header: product.header,
          price: product.price,
          quantity: x
        }
        axios.put(`${url}/${items[index]._id}`, objItem)
          .then((res) => {
            console.log(res.data)
            fetchHandler();
          })
      }
    })
    if (hasItems === false) {
      axios.post(url, product)
        .then((res) => {
          console.log("post data", res.data)
          setItems([...items, res.data])
        })
      console.log("Add item to cart", product)
    }

  };


  const removeItemToCartHandler = async (id, item) => {
    // console.log(item.quantity)
    if (item.quantity > 1) {
      const x=Number(item.quantity)-1
      const objItem = {
        id: item.id,
        image: item.image,
        header: item.header,
        price: item.price,
        quantity: x
      }
      axios.put(`${url}/${id}`, objItem)
        .then((res) => {
          console.log(res.data)
          fetchHandler();
        })

    } else {
      await axios.delete(`${url}/${id}`)
      fetchHandler();
    }
  };


  const clearCartItem = (id) => {
    if (items.length <= 0) {
      alert("There is no items to purchase!!!")
    } else {
      alert("Thanks for purchaseing the item !!!")

      const l=items.length >0

      l && id.forEach((item)=>{
        axios.delete(`${url}/${item._id}`)
      })
      setItems([...[]])
    }

  };



  useEffect(() => {
    fetchHandler();
  }, [])


  const cartContext = {
    cartData: items,
    totalAmount: items.reduce((ack, item) => item.quantity * Number(item.price) + ack, 0),
    totalQuantity: items.reduce((ack, item) => item.quantity + ack, 0),
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartItem,
    Email:email,

    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;