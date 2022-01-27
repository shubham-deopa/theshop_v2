import { useState } from 'react';
import logo from './img/logo.png'
import hamburger from './icon/icon_menu.svg'
import './css/bootstrap.min.css'
import './css/theshopstyle.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'


import Nav from 'react-bootstrap/Nav'

import Malls from './Malls'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Privacypolicy from './Privacypolicy'
import Termsandconditions from './Termsandconditions'
import Offerpromo from './Offerpromo'
import Collections from './Collections'
import Shop from './Shop'
import ShopDetails from './ShopDetails'
import Storelaunch from './Storelaunch'
import Events from './Events'

function Header() {

    const [showMediaIcon, setShowMediaIcon] = useState(false);
    const toggelClass = () => { setShowMediaIcon(!showMediaIcon) };

  return (
    <div className="head head-header">
        <div className="header-logo">
            <div className="hamburger-dask hamburger-mob" >
                {/* <a href="#" onclick={ () => setShowMediaIcon(!showMediaIcon) }> */}
                <a href="#"onclick={toggelClass} >
                    <img src={hamburger} className="" alt="hamburger"  />
                </a>    
            </div>
            <div className="header-logo-mob">
                <a href="/" >
                    <img src={logo} className="logo-img" alt="logo" />
                </a>
            </div>
        </div>
        <nav className={showMediaIcon ? 'mobNavBar' : 'navBar' }>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    <div className="sub-nav-1">
                        <div>
                            <a className="sub-nav-link-1" href="/malls">Malls</a>
                            <a className="sub-nav-link-1" href="/shop">Shop</a>
                            <a className="sub-nav-link-1" href="/offerpromo">Offers & Promos</a>
                            <a className="sub-nav-link-1" href="/collections">Collections & Launch</a>
                        </div>
                        <div>
                            <a className="sub-nav-link-1" href="/events">Events</a>
                            <a className="sub-nav-link-1" href="/storelaunch">Stores Launches</a>
                            <a className="sub-nav-link-1" href="http://blog.theshops.in/">FNL</a>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/malls">Malls</a>               
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/shop">Shops</a>
                    <div className="sub-nav-1">
                        <div>
                            <a className="sub-nav-link-1" href="/shop">Menswear</a>
                            <a className="sub-nav-link-1" href="/shop">Womenswear</a>
                            <a className="sub-nav-link-1" href="/shop">Kidswear</a>
                        </div>
                        <div>
                            <a className="sub-nav-link-1" href="/shop">Jewellery</a>
                            <a className="sub-nav-link-1" href="/shop">Bags & Accessories</a>
                            <a className="sub-nav-link-1" href="/shop">Home Decor</a>
                        </div>
                        <div>
                            <a className="sub-nav-link-1" href="/shop">Electronics</a>
                            <a className="sub-nav-link-1" href="/shop">Beauty & Wellness</a>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="http://blog.theshops.in/">FNl</a>
                    <div className="sub-nav-1">
                        <div>
                            <a className="sub-nav-link-1" href="#">Fashion</a>
                            <a className="sub-nav-link-1" href="#">Beauty & Wellness</a>
                            <a className="sub-nav-link-1" href="#">Home Decor</a>
                        </div>
                        <div>
                            <a className="sub-nav-link-1" href="#">Gadgets</a>
                            <a className="sub-nav-link-1" href="#">Kids</a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
