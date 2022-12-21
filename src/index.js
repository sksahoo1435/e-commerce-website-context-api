import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Components/UI/About';
import Home from './Components/UI/Home';
import Contact from './Components/UI/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Details from './Components/UI/Details';
import LogIn from './Components/UI/LogIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/details' element={<Details/> } exact/>
      <Route path='/login' element={<LogIn/>}/>
    </Routes>
  </Router>
);


