import './App.css';
import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Components/UI/Details';
import LogIn from './Components/UI/LogIn';
import About from './Components/UI/About';
import Home from './Components/UI/Home';
import Contact from './Components/UI/Contact';
import CartProvider from './Components/Context/CartProvider';


function App() {


  return (
    <div className="App">
      <CartProvider>       
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/details' element={<Details />} exact />
            <Route path='/login' element={<LogIn />} />
          </Routes>
        
      </CartProvider>
    </div>
  );
}

export default App;
