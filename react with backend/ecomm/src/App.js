import './App.css';
import NavbarNew from './Components/Navigation/NavbarNew';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import ProductList from './Components/ProductList/ProductList';
import Cart from './Components/Cart/Cart';
import SideBar from './Components/SideBar/SideBar';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/SignUp';
import React, { useState } from 'react'


function App() {
  const [open, setopen] = useState(false)
  const handleclick =()=>{
    setopen(!open);
  }
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', width: '100%' }}>
        <SideBar  open={open} />
        <div className="sidecont-side-sec" style={{width:'100%'}}>
          <NavbarNew click={handleclick}/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='products' element={<ProductList />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            <Route path='signup' element={<SignUp />}></Route>
            <Route path='login' element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
