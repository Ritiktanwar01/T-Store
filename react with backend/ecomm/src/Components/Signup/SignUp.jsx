import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import SignupStyle from '../Signup/SignupStyle.css'
import axios from 'axios'

function SignUp() {
  const [email, setemail] = useState()
  const [confirmpassword, setconfirmpassword] = useState()
  const [mobile, setmobile] = useState()
  const sendata = () => {
  const url = 'http://127.0.0.1:8000/apidata/signup/'
  const data = {"email":email,"password":confirmpassword,"mobile":mobile}
  axios.post(url,data).then((response)=>{
    console.log(response)
  })
  }
  const navigate = useNavigate()
  const [password, setpassword] = useState()
  const Validationpasswd = ()=>{
    if (confirmpassword == password){
      sendata();
      alert('User Created');
      navigate('/login');
    }else{
      alert('Please check the password')
    }
  }
  return (
    <div className='container' style={{ width: '35%', margin: '90px auto', border: '1px solid green', borderRadius: 4, height: '64%', padding: '4% 0', paddingLeft: '4%', paddingRight: 0 }}>
      <div className="mb-3 col">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputUser" onChange={e => setemail(e.target.value)}  required/>
        </div>
      </div>
      <div className="mb-3 col">
        <label className="col-sm-2 col-form-label">Mobile</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" onChange={e => setmobile(e.target.value)} required/>
        </div>
      </div>
      <div className="mb-3 col">
        <label className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" onChange={e => setpassword(e.target.value)} required/>
        </div>
      </div>
      <div className="mb-3 col">
        <label className="col-sm-2 col-form-label">Confirm Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" onChange={e => setconfirmpassword(e.target.value)} required/>
        </div>
      </div>
      <div className="mb-3 col">
        <div className="col-sm-10">
          <button type="button" className="btn btn-success" onClick={() => Validationpasswd()}>SignUp</button>
        </div>
      </div>
      <Link className='nav-link' to={'/login'}>Already have an account ?</Link>
    </div>
  )
}

export default SignUp