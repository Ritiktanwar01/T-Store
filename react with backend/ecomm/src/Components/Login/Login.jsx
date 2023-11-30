import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [email, setemail] = useState()
  const navigate = useNavigate()
  const [password, setpassword] = useState()
  const logindata = () => {
    const url = 'http://127.0.0.1:8000/apidata/login/'
    const data = {"email":email,"password":password}
    axios.post(url,data).then((response)=>{
      if (response.data.payload == "Login Success"){
        navigate('/')
        window.sessionStorage.clear()
        window.sessionStorage.setItem("data",response.data.authkey)
      }else{
        alert("Login Faild")
      }
    })
    }
  return (
    <div className='container' style={{width:'35%',margin:'90px auto',border:'1px solid green',borderRadius:4,height:'60%',padding:'4% 0',paddingLeft:'4%',paddingRight:0}}>
    <div className="mb-3 col">
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
    <input type="text" className="form-control" id="inputUser" onChange={e => setemail(e.target.value)} required/>
    </div>
  </div>
  <div className="mb-3 col">
    <label  className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" onChange={e =>setpassword(e.target.value)} required/>
    </div>
  </div>
  <div className="mb-3 col">
    <div className="col-sm-10">
      <input type="submit" className="form-control btn btn-success" id="inputPassword" onClick={()=>logindata()}/>
    </div>
  </div>
  <nav>
  <Link to={'/signup'} className='nav-link'>+ Create New Account</Link>
  </nav>
  </div>
  )
}

export default Login