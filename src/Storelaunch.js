import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import './css/theshopstyle.css';

import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'

import Header from './Header';
import Footer from './Footer';

function Storelaunch() {
  return (
    <div className="head">
        
        <Header/>


        {/* <!-- Heading And Search --> */}
        <section className="container">
            <div className="heading-name">
                <h1>
                    Events
                </h1>
            </div>
            <div className="search-container mb-4">
                <div className="no-gutters row">
                    <div className=" col-md-9">
                        <div>
                            <input className="input-search" value=""/>
                        </div>
                    </div>
                    <div className=" col-md-3">
                        <button className="btn-search">Search</button>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Events --> */}
        <section className="container collections">

            {/* <!--  --> */}
            <div className="card collections-cols c-e-s-upper ">
                <div className="col-lg-12 half-img p-1"> 
                    <img src={require('./img/offers/001.jpg')} className="d-block w-100" alt="..."/>
                    <div className="img-title">
                        <h3 className="collect-title">Title</h3>
                        <p className="collect-desc">Description Text</p>
                    </div>
                </div>   
            </div>
            {/* <!--  --> */}

            {/* <!--  --> */}
            <div className="card collections-cols c-e-s-lower">
                <div className="col-lg-6 half-img p-1"> 
                    <img src={require('./img/offers/002.jpg')} className="d-block w-100" alt="..."/>
                    <div className="img-title">
                        <h3 className="collect-title">Title</h3>
                        <p className="collect-desc">Description Text</p>
                    </div>
                </div>  
                <div className="col-lg-6 half-img p-1"> 
                        <img src={require('./img/offers/003.jpg')} className="d-block w-100" alt="..."/>
                        <div className="img-title">
                            <h3 className="collect-title">Title</h3>
                            <p className="collect-desc">Description Text</p>
                        </div>
                </div>  
            </div>
            {/* <!--  --> */}

            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">Load more</button>
            </div>
        </section>


<section className="container ">

            <div className="card c-e-s-body">
                <div className="col-lg-12 half-img p-1 c-e-s-top"> 
                    <img src={require('./img/offers/002.jpg')} className="c-e-s-top-img" alt="..."/>
                    <div className="c-e-s-top-text">
                        <h3 className="c-e-s-top-text-title">Be Early At Nike</h3>
                        <p className="c-e-s-top-text-desc">All early birds can avail a special 20% off at Nike!</p>
                    </div>
                </div> 
                <div className="col-lg-12 half-img p-1 c-e-s-bottom"> 
                    <img src={require('./img/offers/003.jpg')} className="c-e-s-bottom-img" alt="..."/>
                    <div className="c-e-s-bottom-text">
                        <h3 className="c-e-s-bottom-text-title">Be Early At Nike</h3>
                        <p className="c-e-s-bottom-text-desc">All early birds can avail a special 20% off at Nike!</p>
                    </div>
                </div>  
                <div className="col-lg-12 half-img p-1 c-e-s-top"> 
                    <img src={require('./img/offers/002.jpg')} className="c-e-s-top-img" alt="..."/>
                    <div className="c-e-s-top-text">
                        <h3 className="c-e-s-top-text-title">Be Early At Nike</h3>
                        <p className="c-e-s-top-text-desc">All early birds can avail a special 20% off at Nike!</p>
                    </div>
                </div> 
                <div className="col-lg-12 half-img p-1 c-e-s-bottom"> 
                    <img src={require('./img/offers/003.jpg')} className="c-e-s-bottom-img" alt="..."/>
                    <div className="c-e-s-bottom-text">
                        <h3 className="c-e-s-bottom-text-title">Be Early At Nike</h3>
                        <p className="c-e-s-bottom-text-desc">All early birds can avail a special 20% off at Nike!</p>
                    </div>
                </div>
            </div>

</section>
<div className='height-250'></div>
<section className="container ">

            <div className="card c-e-s-body2">
                <div className="col-lg-12 half-img p-1 c-e-s-top"> 
                    <img src={require('./img/offers/002.jpg')} className="c-e-s-top-img" alt="..."/>
                    <div className="c-e-s-top-text">
                        <h3 className="c-e-s-top-text-title">Be Early At Nike</h3>
                        <p className="c-e-s-top-text-desc">All early birds can avail a special 20% off at Nike!</p>
                    </div>
                </div> 
                <div className="col-lg-12 half-img p-1 c-e-s-bottom"> 
                    <img src={require('./img/offers/003.jpg')} className="c-e-s-bottom-img" alt="..."/>
                    <div className="c-e-s-bottom-text">
                        <h3 className="c-e-s-bottom-text-title">Be Early At Nike</h3>
                        <p className="c-e-s-bottom-text-desc">All early birds can avail a special 20% off at Nike!</p>
                    </div>
                </div>  
                <div className="col-lg-12 half-img p-1 c-e-s-top"> 
                    <img src={require('./img/offers/004.jpg')} className="c-e-s-top-img" alt="..."/>
                    <div className="c-e-s-top-text">
                        <h3 className="c-e-s-top-text-title">Be Early At Nike</h3>
                        <p className="c-e-s-top-text-desc">All early birds can avail a special 20% off at Nike!</p>
                    </div>
                </div> 
                <div className="col-lg-12 half-img p-1 c-e-s-bottom"> 
                    <img src={require('./img/offers/005.jpg')} className="c-e-s-bottom-img" alt="..."/>
                    <div className="c-e-s-bottom-text">
                        <h3 className="c-e-s-bottom-text-title">Be Early At Nike</h3>
                        <p className="c-e-s-bottom-text-desc">All early birds can avail a special 20% off at Nike!</p>
                    </div>
                </div> 
                <div className="col-lg-12 half-img p-1 c-e-s-top"> 
                    <img src={require('./img/offers/001.jpg')} className="c-e-s-top-img" alt="..."/>
                    <div className="c-e-s-top-text">
                        <h3 className="c-e-s-top-text-title">Be Early At Nike</h3>
                        <p className="c-e-s-top-text-desc">All early birds can avail a special 20% off at Nike!</p>
                    </div>
                </div> 
                <div className="col-lg-12 half-img p-1 c-e-s-bottom"> 
                    <img src={require('./img/offers/002.jpg')} className="c-e-s-bottom-img" alt="..."/>
                    <div className="c-e-s-bottom-text">
                        <h3 className="c-e-s-bottom-text-title">Be Early At Nike</h3>
                        <p className="c-e-s-bottom-text-desc">All early birds can avail a special 20% off at Nike!</p>
                    </div>
                </div> 
            </div>

</section>

<Footer/>

    </div>
  );
}

export default Storelaunch;
