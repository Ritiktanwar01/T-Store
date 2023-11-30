import React from 'react'
import { Link } from 'react-router-dom'
import SideBarStyle from '../SideBar/SideBarStyle.css'

function SideBar({open}) {
  return (
    <div className={open?"side-bar":"remove"} id='sidebarmain'>
        <div className="user-profile">
            <img src="https://th.bing.com/th?id=ORMS.ce7fc64b080b5083fec471d10093e8a9&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0" alt="user" />
            <p>Ritik</p>
        </div>
        <div className="user-settings">
            <ul>
                <li>
                    <Link>Profile Image</Link>
                </li>
                <li>
                    <Link>Security</Link>
                </li>
                <li>
                    <Link>My Products</Link>
                </li>
                <li>
                    <Link>Purchase History</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar