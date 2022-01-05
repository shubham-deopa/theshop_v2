import logo from './logo.svg';
import './css/bootstrap.min.css';
import './css/theshopstyle.css';

import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'

import Header from './Header';
import Footer from './Footer';

function Aboutus() {
  return (
    <div className=" head">
        


{/* <!---------- About Us ----------> */}
<section className="container">
    <div className="about-us">
        <div className="top-container">
            <h1 className="text-center">About Us</h1>
            <div className="image-wrapper">
                <img className="" src={require('./img/about-us-image.jpg')} />
            </div>
        </div>
        <div className="bottom-container">
            <h5>Lifestyle Destination of India</h5>
            <p>Theshops.in is a specially designed interactive online platform for the convenience of shoppers in
                India. It is a unique one-stop platform that digitally connects malls, high streets, retail brands
                and their stores to drive consumer convenience and brand engagement in a comprehensive way. We are
                the curator of News &amp; Updates, Latest Collections &amp; Launches, Trending Styles, Offers &amp;
                Promos, etc, related to retail brands across categories. We strive to empower the consumers with
                latest trends, launches, product reviews, and to facilitate direct interaction between consumers and
                retail brands.</p>
            <p className="text-center"><button type="button" className="btn btn-outline-dark btn">Join now!</button></p>
            <h5>Know Better. Shop Better.</h5>
            <p>When it comes to shopping, we believe in educating the consumer so that he/she makes an informed
                decision. From latest Collections &amp; Launches to the most happening Events,
                <a className=" achor-link" href="#" target="blank">theshops.in</a> is at the heart of fashion &amp;
                lifestyle.
            </p>
            <h5>What Matters To You, Matters To Us</h5>
            <p>Advice, Tips &amp; Tricks… across Fashion, Beauty, Grooming, Gadgets, Home Decor And Much More.</p>
            <p className="matter">
                <dir className="img-col row">
                    <dir className="col-img-list col-md-4 col-sm-12  ">
                        <a className=" achor-link" href="#" target="blank">
                            <div>
                                <img src={require('./img/fashion.jpg')}  className="round-img" />
                            </div>
                            <p>FASHION</p>
                        </a>
                    </dir>
                    <dir className="col-img-list col-md-4 col-sm-12">
                        <a className=" achor-link" href="#" target="blank">
                            <div>
                                <img src={require('./img/beauty & wellness.jpg')} className="round-img" />
                            </div>
                            <p>BEAUTY & WELLNESS</p>
                        </a>
                    </dir>
                    <dir className="col-img-list col-md-4 col-sm-12">
                        <a className=" achor-link" href="#" target="blank">
                            <div>
                                <img src={require('./img/gadgets.jpg')} className="round-img" />
                            </div>
                            <p>Gadgets</p>
                        </a>
                    </dir>
                </dir>
            </p>
        </div>
    </div>
</section>




    </div>
  );
}

export default Aboutus;
