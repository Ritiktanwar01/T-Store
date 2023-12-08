import React from 'react'
import { MdSecurity } from 'react-icons/md'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Security = () => {
  const navigate = useNavigate()
  const gosecuritymain = () =>{
    const url = 'http://127.0.0.1:8000/apidata/tokenvalidate/'
    const data = {"token":window.sessionStorage.getItem("data")}
    axios.post(url,data).then((response)=>{
      if (response.data.payload === "authanticated"){
        navigate('/passwdcng')
      }else{
        navigate('/login')
      }
    })
  }
  return (
    <div>
      <ul>
        <li>
            <span onClick={gosecuritymain}>
                <MdSecurity /> <span style={{cursor:'pointer'}}>Change Password</span>
            </span>
        </li>
      </ul>
    </div>
  )
}

export default Security