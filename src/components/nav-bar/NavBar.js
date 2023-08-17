import "./navBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className="nav">
        <a className="site-title">MINA</a>
        <ul className="super-menu">
            <li className="nav-menu">
                <Link className="nav-link" to="/">Shope</Link> 
            </li>
            <li className="nav-menu">
                <Link className="nav-link" to="/sustainability">Sustainability</Link>
            </li>
            <li className="nav-menu">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-menu">
                <Link className="nav-link" to="/">Contact</Link>
            </li>
            <li className="nav-menu">
                <Link className="nav-link"  to="/">Cart</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
