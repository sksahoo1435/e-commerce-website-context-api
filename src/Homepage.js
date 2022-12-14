import React,{useState} from 'react';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import Navbars from './Components/UI/Navbars';
import Data from './Components/UI/Data';



const Homepage = () => {

    const [show,setShow]=useState(false);
    

  return (
    <>
      <Navbars showCart={show} hideCartSeeCart={(data)=>{setShow(data)}}/>
      <Header header="MUSIC"  />
      <Data showCart={(data)=>setShow(data)} />
      <Footer />
    </>
  )
}
export default Homepage;
