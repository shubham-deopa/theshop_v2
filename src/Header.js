import logo from './img/logo.png';
import './css/bootstrap.min.css';
import './css/theshopstyle.css';

function Header() {
  return (
    <div className="head">
        <div className="">
          <img src={logo} className="logo-img" alt="logo" />
        </div>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <div className="sub-nav-1">
                    <div>
                        <a className="sub-nav-link-1" href="">Malls</a>
                        <a className="sub-nav-link-1" href="">Shop</a>
                        <a className="sub-nav-link-1" href="">Offers & Promos</a>
                        <a className="sub-nav-link-1" href="">Collections & Launch</a>
                    </div>
                    <div>
                        <a className="sub-nav-link-1" href="">Events</a>
                        <a className="sub-nav-link-1" href="">Stores Launches</a>
                        <a className="sub-nav-link-1" href="">FNL</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Malls</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Shops</a>
                <div className="sub-nav-1">
                    <div>
                        <a className="sub-nav-link-1" href="#">Menswear</a>
                        <a className="sub-nav-link-1" href="#">Womenswear</a>
                        <a className="sub-nav-link-1" href="#">Kidswear</a>
                    </div>
                    <div>
                        <a className="sub-nav-link-1" href="#">Jewellery</a>
                        <a className="sub-nav-link-1" href="#">Bags & Accessories</a>
                        <a className="sub-nav-link-1" href="#">Home Decor</a>
                    </div>
                    <div>
                        <a className="sub-nav-link-1" href="#">Electronics</a>
                        <a className="sub-nav-link-1" href="#">Beauty & Wellness</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link">FNl</a>
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
    </div>
  );
}

export default Header;
