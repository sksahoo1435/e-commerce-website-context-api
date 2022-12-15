import React, { useState } from 'react';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import Navbars from './Components/UI/Navbars';
import Data from './Components/UI/Data';
import CartProvider from './Components/Context/CartProvider';



const Homepage = () => {

  const [show, setShow] = useState(false);


  return (
      <CartProvider>
        <Navbars showCart={show} hideCartSeeCart={(data) => { setShow(data) }} />
        <Header header="MUSIC" />
        <Data showCart={(data) => setShow(data)} />
        <Footer />
      </CartProvider>
  )
}
export default Homepage;
