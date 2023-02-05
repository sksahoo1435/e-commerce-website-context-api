import { useContext, useState } from "react";
import CartContext from "../Context/Cart-Context";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartProvider = (props) => {

  const [items, setItems] = useState([]);

  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState('');

  const userIsLoggedIn = !!token;

  const EmailToUse = cartCtx.Email.replace(/\W/g, '')

  const fetchHandler = async () => {

    const response = await axios.get(`https://ecommerce-2e20f-default-rtdb.firebaseio.com/cart${EmailToUse}.json`);

    const entries = Object.entries(response.data);

    setItems([...items])

    console.log("fetch handler", entries)

  }

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token)
    localStorage.setItem("email", email)
  }


  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email')
    navigate('/')
  }


  const addItemToCartHandler = async (product) => {

    let newarr = [...items]
    let hasItem = false
    console.log("new array", newarr, product)
    newarr.forEach((item, index) => {

      if (item.id === product.id) {

        hasItem = true

        items[index].quantity = Number(items[index].quantity) + Number(product.quantity);


        const x = Number(newarr[index].quantity) + Number(product.quantity) - 1;

        console.log("exist item quantity ", x)


        const updatedQp = {
          id: product.id,
          header: product.header,
          image: product.image,
          price: product.price,
          quantity: x
        }

        const response = axios.put(`https://ecommerce-2e20f-default-rtdb.firebaseio.com/cart${EmailToUse}/${items[index]._id}.json`, updatedQp)
        response.then(res => {
          console.log("existing item", res.data)
          fetchHandler()

        })

      }

    })

    if (hasItem === false) {
      const res = await axios.post(`https://ecommerce-2e20f-default-rtdb.firebaseio.com/cart${EmailToUse}.json`, product)

      if (res.status === 200) {

        let c = JSON.parse(res.config.data)
        const obj = {
          _id: res.data.name,
          ...c
        }

        setItems([...items, obj])

      }
    }

  };

  const removeItemToCartHandler = async (id, item) => {


    if (item.quantity > 1) {
      const x = Number(item.quantity) - 1
      const objItem = {
        id: item.id,
        image: item.image,
        header: item.header,
        price: item.price,
        quantity: x
      }
      axios.put(`https://ecommerce-2e20f-default-rtdb.firebaseio.com/cart${EmailToUse}/${id}.json`, objItem)
        .then((res) => {
          axios.get(`https://ecommerce-2e20f-default-rtdb.firebaseio.com/cart${EmailToUse}.json`)
          .then(res => {


            let arr = []

            for (let [keys, values] of Object.entries(res.data)) {
              arr.push({ _id: keys, ...values })
            }

            console.log(arr)
            setItems(arr)

          })
          
        })

    }
    else {
      const response = await axios.delete(`https://ecommerce-2e20f-default-rtdb.firebaseio.com/cart${EmailToUse}/${id}.json`)

      if (response.status === 200) {

        axios.get(`https://ecommerce-2e20f-default-rtdb.firebaseio.com/cart${EmailToUse}.json`)
          .then(res => {


            let arr = []

            for (let [keys, values] of Object.entries(res.data)) {
              arr.push({ _id: keys, ...values })
            }

            console.log(arr)
            setItems(arr)

          })

      }

    }


  };

  const clearCartItem = (id) => {

    if (items.length <= 0) {

      alert("There is no items to purchase!!!")

    } else {

      alert("Thanks for purchaseing the item !!!")

      const l = items.length > 0

      l && id.forEach((item) => {
        axios.delete(`https://ecommerce-2e20f-default-rtdb.firebaseio.com/cart${EmailToUse}/${item._id}.json`)
      })
      setItems([...[]])
    }

  };

  const cartContext = {

    cartData: items,
    totalAmount: items.reduce((ack, item) => item.quantity * Number(item.price) + ack, 0),
    totalQuantity: items.reduce((ack, item) => item.quantity + ack, 0),
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartItem,
    Email: email,

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