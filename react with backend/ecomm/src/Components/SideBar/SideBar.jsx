import { Link, useNavigate } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";
import SideBarStyle from '../SideBar/SideBarStyle.css'
import { MdSecurity } from "react-icons/md";
function SideBar (props) {
    const navigate = useNavigate()
    const logoutFun = ()=>{
        sessionStorage.clear()
        navigate('/')
        props.click()
    }
  const gosecurity = ()=>{
    navigate('security')
    props.click()
  }
  return (
    <div className={props.open?"side-bar":"remove"}>
        <div className="user-profile">
            <img src={"http://127.0.0.1:8000/media/" + props.img} alt="user" />
            <p>{props.username}</p>
        </div>
        <div className="user-settings">
            <ul>
                <li>
                    <Link>Purchase History</Link>
                </li>
                <li>
                    <Link>Profile Settings</Link>
                </li>
                <li>
                    <Link>My Products</Link>
                </li>
                <li>
                <span onClick={gosecurity}>
                    <MdSecurity /> <span style={{cursor:'pointer'}}>Security</span>
                </span>
                </li>
                <li>
                <span onClick={logoutFun}>
                    <CiLogout /><span style={{cursor:'pointer'}}>Logout</span>
                </span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar