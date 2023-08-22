import './mainFooter.css'
import { Link } from 'react-router-dom';

import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';


const MainFooter = () => {
  return (
    <div className='main-footer'>
        <div className='main-footer-right-container'>
            <h1>MINA</h1>
            <div className='main-footer-social-midea-icons'>
                <Link className='main-footer-links'><BsTwitter/></Link>
                <Link className='main-footer-links'><BsFacebook/></Link>
                <Link className='main-footer-links'><BsInstagram/></Link>
            </div>
        </div>

        <div className='main-footer-left-container'>
            <Link className='main-footer-links' to='/'><h3>Contact</h3></Link>
            <Link className='main-footer-links' to='/'><h3>Returns</h3></Link>
            <Link className='main-footer-links' to='/'><h3>Payments & Delivery</h3></Link>
        </div>
    </div>
  )
}

export default MainFooter
