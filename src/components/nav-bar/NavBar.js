import "./navBar.css"
import { Link, NavLink} from "react-router-dom"
import { Drawer } from "antd"
import { useState } from "react"


const NavBar = () => {

   const [drawer, setDrawer] = useState(false)

   const handleDrawerBTN = () => {
    setDrawer(true)
   }
  return (
    <nav className="nav">
        <Link to="/" className="site-title">MINA</Link>
        <ul className="super-menu">
            <li className="nav-menu" id="shop-menu-li">
                <Link className="nav-link" id="shop-menu" >Shope</Link> 
                <div className="shop-menu-container">
                    <ul className="submenu">
                        <li className="product"><NavLink className="product-link" to="/shop/all_products">All prodacts</NavLink></li>
                        <li className="product"><NavLink className="product-link" to="/shop/new_products">New products</NavLink></li>
                    </ul>
                </div>
            </li>
            <li className="nav-menu">
                <NavLink  className="nav-link" to="/sustainability">Sustainability</NavLink>
            </li>
            <li className="nav-menu">
                <NavLink  className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-menu">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-menu">
                <button className="nav-link" id="drawer-button"  onClick={handleDrawerBTN}>Cart ( 0 )</button>
            </li>
        </ul>
        <Drawer visible={drawer} onClose={() => {setDrawer(false)}}>
            <h2>Shoping bag is empty</h2>
        </Drawer>
    </nav>
  )
}

export default NavBar
