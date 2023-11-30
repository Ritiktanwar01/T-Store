import React, { useEffect } from 'react'
import { BsCart } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { Link, Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

function NavbarNew({click}) {
  // useEffect( () =>{
  //   const url = 'http://127.0.0.1:8000/apidata/tokenvalidate/'
  //   const data = {"token":window.sessionStorage.getItem("data")}
  //   axios.post(url,data).then((response)=>{
  //     if (response.data.payload == "authanticated"){

  //     }else{
  //       alert("Login Again !!!")
  //     }
  //   })
  // },[])
  const Navigate = useNavigate()
    const verifyuser = () =>{
    const url = 'http://127.0.0.1:8000/apidata/tokenvalidate/'
    const data = {"token":window.sessionStorage.getItem("data")}
    axios.post(url,data).then((response)=>{
      if (response.data.payload == "authanticated"){
        click()
      }else{
        Navigate('/login')
      }
    })
  }
  const verifyuserCart = () =>{
    const url = 'http://127.0.0.1:8000/apidata/tokenvalidate/'
    const data = {"token":window.sessionStorage.getItem("data")}
    axios.post(url,data).then((response)=>{
      if (response.data.payload == "authanticated"){
        Navigate('/cart')
      }else{
        Navigate('/login')
      }
    })
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   <Link to={'/'} className="navbar-brand">T-Store</Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to={'/'} style={{textDecoration:'none'}} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={'products'} style={{textDecoration:'none'}}>Products</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact us
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link style={{textDecoration:'none'}} className="dropdown-item">Personalized Software</Link></li>
            <li><Link style={{textDecoration:'none'}} className="dropdown-item">Software Related Querry</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link style={{textDecoration:'none'}} className="dropdown-item">Hire Us</Link></li>
          </ul>
        </li>
      </ul>
      <div className="d-flex">
      <Link onClick={()=>verifyuserCart()}><BsCart size={28} style={{marginRight:24,marginTop:'2px'}}/></Link>
      {/* cart data <p style={{position:'absolute',top:0,marginLeft:'20px',backgroundColor:'#dc3545',borderRadius:50,width:'22px',height:'22px',textAlign:'center',color:'white'}}>2</p> */}
       <Link onClick={()=>verifyuser()}> <FaRegUser size={28} /> </Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavbarNew