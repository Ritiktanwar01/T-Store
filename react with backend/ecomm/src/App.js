import './App.css';
import NavbarNew from './Components/Navigation/NavbarNew';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import ProductList from './Components/ProductList/ProductList';
import Cart from './Components/Cart/Cart';
import SideBar from './Components/SideBar/SideBar';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/SignUp';
import React, { useEffect, useState } from 'react'
import Security from './Components/Security/Security';
import ChangePass from './Components/ChangePass/ChangePass';
import axios from 'axios';

function App() {
  const [userdata, setuserdata]= useState([])
  const [username, setusername]= useState("user_0")
  const [userimage, setuserimage]= useState("media/userProfiles/default.png")
  const [open, setopen] = useState(false)
  useEffect(()=>{
    async function getuserdata(){
      const url = "http://127.0.0.1:8000/apidata/sidebardata/"
    const data ={
      "token":window.sessionStorage.getItem("data")
    }
    try{
          await axios.post(url,data).then((response) => setuserdata(response.data))
          // setuserdata(user.data)
          // setuserdata(user.data)
          setuserimage(userdata.payload[0].user_image)
          setusername(userdata.payload[0].user_name)
    }catch (error){
        console.log(error)
    }
  }
  getuserdata();
  },[])
  const handleclick =()=>{
    setopen(!open);
  }
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', width: '100%' }}>
        <SideBar  open={open} click={()=>setopen(false)} username={username} img ={userimage}/>
        <div className="sidecont-side-sec" style={{width:'100%'}}>
          <NavbarNew click={handleclick}/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='products' element={<ProductList />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            <Route path='signup' element={<SignUp />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='security' element={<Security />}></Route>
            <Route path='passwdcng' element={<ChangePass />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
