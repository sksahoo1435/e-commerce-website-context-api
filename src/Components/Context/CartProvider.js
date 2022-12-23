import { useEffect, useState } from "react";
import CartContext from "../Context/Cart-Context";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartProvider = (props) => {


  const [items, setItems] = useState([])

  const navigate = useNavigate();

  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const url = 'https://crudcrud.com/api/6948e789789648cbb9cd81dc1046b855/cart';
  
  const fetchHandler = async () => {
    const response = await axios.get(url)
    console.log(response.data._id)
    setItems(response.data)

  }

  const loginHandler = (token) => {
    setToken(token);
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
        const x =  Number(newArray[index].quantity) + Number(product.quantity)-1;
        const objItem = {
          id: product.id,
          image: product.image,
          header: product.header,
          price: product.price,
          quantity: x
        }
        axios.put(`https://crudcrud.com/api/6948e789789648cbb9cd81dc1046b855/cart/${items[index]._id}`, objItem)
          .then((res) => { console.log(res.data) 
            fetchHandler();
          } )


        // }

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


  const removeItemToCartHandler = async (id) => {
      await axios.delete(`https://crudcrud.com/api/6948e789789648cbb9cd81dc1046b855/cart/${id}`)
      fetchHandler();
  };

  
  const clearCartItem = (id) => {
    if (items.length <= 0) {
      alert("There is no items to purchase!!!")
    } else {
      alert("Thanks for purchaseing the item !!!")
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