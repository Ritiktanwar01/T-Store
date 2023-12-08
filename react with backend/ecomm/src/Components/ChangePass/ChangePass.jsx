import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import SignupStyle from '../Signup/SignupStyle.css'
import axios from 'axios'

function ChangePass() {
    const navigate = useNavigate()
    const [password, setpassword] = useState()
    const [confp, setcnfp] = useState()
    const [oldpasswd, setoldpasswd] = useState()
    const sendata = () => {
      const data = {'newpassword':confp,'oldpassword':oldpasswd,'token':window.sessionStorage.getItem("data")}
      console.log(data)
        const url = 'http://127.0.0.1:8000/apidata/changepassword/'
        axios.post(url,data).then((response)=>{
          console.log(response)
        })}
    const verifyuser = () =>{
        const url = 'http://127.0.0.1:8000/apidata/tokenvalidate/'
        const data = {"token":window.sessionStorage.getItem("data")}
        axios.post(url,data).then((response)=>{
          if (response.data.payload === "authanticated"){
            if (confp === password){
                sendata();
                // setpassword("")
                // setconfirmpassword("")
                navigate('/')
              }else{
                alert('Please check the password')
              }
          }else{
            navigate('/login')
          }
        })
      }
  return (
    <div className='container' style={{ width: '35%', margin: '90px auto', border: '1px solid green', borderRadius: 4, height: '68%', padding: '4% 0', paddingLeft: '4%', paddingRight: 0 }}>
      <div className="mb-3 col">
        <label className="col-sm-2 col-form-label">Old Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputUser" onChange={e => setoldpasswd(e.target.value)}  required/>
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
          <input type="password" className="form-control" onChange={e =>setcnfp(e.target.value)} required/>
        </div>
      </div>
      <div className="mb-3 col">
        <div className="col-sm-10">
          <button type="button" className="btn btn-success" style={{padding:'4px 152px'}} onClick={verifyuser}>Save</button>
        </div>
      </div>
      {/* <Link className='nav-link' to={'/login'}>Already have an account ?</Link> */}
    </div>
  )
}

export default ChangePass