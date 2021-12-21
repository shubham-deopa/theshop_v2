import logo from './img/logo.png';
import './css/bootstrap.min.css';
import './css/theshopstyle.css';

function Footer() {
  return (
    
    // <!-- footer -->
    <footer>
        <div className="container foot">
            <div className="brand-info__divider">
                <hr></hr>
            </div>
            <ul className="footer-menu">
                <li>
                    <a className=" achor-link" href="/aboutus">About Us</a>
                    <a className=" achor-link" href="/contactus">Contact Us</a>
                    <a className=" achor-link" href="/privacypolicy">Privacy Policy</a>
                    <a className=" achor-link" href="/termsandconditions">Terms &amp; Conditions</a>
                    <a className=" achor-link" href="mailto:contact@theshops.in">Email:contact@theshops.in</a>
                </li>
            </ul>
            <div className="">
                <h3 className="follow-us-title">Follow Us</h3>
            </div>
            <div className="footer-icon">
                <ul>
                    <li>
                        <div className="button-ripple">
                            <a href="https://www.facebook.com/theshopsin">
                                <img src={require("./icon/footer-facebook.svg").default} alt=" " srcset=""/>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="button-ripple">
                            <a href="https://www.instagram.com/theshops.in/">
                                <img src={require("./icon/footer-instagram.svg").default} alt=" " srcset=""/>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="button-ripple">
                            <a href="https://twitter.com/TheShopsIn">
                                <img src={require("./icon/footer-twitter.svg").default} alt=" " srcset=""/>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className=" button-ripples">
                        <a href="https://www.youtube.com/channel/UC6opu6w_ARcXr1NF5UBCfwA/featured">
                            <img src={require('./icon/footer-youtube.svg').default}  alt=" "/>
                        </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </footer>


    
  );
}

export default Footer;
