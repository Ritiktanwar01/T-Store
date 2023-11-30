import { Link } from 'react-router-dom'
import StyleNav from '../Navigation/StyleNav.css'
import displayhandle from '../SideBar/SideBar'
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

function Navbar() {
//   function displayhandle(){
//     document.getElementById('sidebarmain').classList.toggle('displayshow')
//     document.getElementById('sidebarmain').classList.toggle('displayhide')
//     document.getElementById('cardTittle').classList.toggle('card-tittle')
//     document.getElementById('cardTittle').classList.toggle('card-tittle-2')
// }
  return (
      <nav>
        <div className="logo">
            <Link to={'/'}><h2>T-STORE</h2></Link>
        </div>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'products'}>Products</Link>
          </li>
          <li>
            <Link to={'about'}>About us</Link>
          </li>
          <li>
            <Link to={'contact'}>Contact us</Link>
          </li>
        </ul>
        <div className="cart">
          <div className="cart-item-count"><h3>20</h3></div>
          <Link to={'cart'}><BsCart size={28}  className='iconmainuser'/></Link>
        </div>
        <div className="account" onClick={()=>displayhandle()}>
        <FaRegUser size={28}  className='iconmainuser' />
        </div>
      </nav>
  )
}

export default Navbar