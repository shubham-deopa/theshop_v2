import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import './css/theshopstyle.css';

import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'

import Header from './Header';
import Footer from './Footer';

function Offerpromo() {
  return (
    <div className="App head">
        
    {/* <!-- Heading And Search --> */}
    <section className="container">
        <div className="heading-name">
            <h1>
                Offers & Promos
            </h1>
        </div>
        <div className="search-container mb-4">
            <div className="no-gutters row">
                <div className=" col-md-9">
                    <div>
                        <input className="input-search" value="" />
                    </div>
                </div>
                <div className=" col-md-3">
                    <button className="btn-search">Search</button>
                </div>
            </div>
        </div>
    </section>


    {/* type 1 */}
    <section className='container'>
        <div className='row row001'>
            <div className='col-lg-4 col-md-6 col-sm-1 p-2'>
                <div className='dispBody'>
                    <img className='text-img' src={require('./img/offers/001.jpg')} alt="..."/>
                    <div className="textBody">
                        <p className="text-head">OFFER</p>
                        <h3 className="text-title">Quirky Safety At Jack & Jones</h3>
                        <p className="text-desc">Get safety masks with a quirky update at 60% off*!</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-1 p-2'>
                <div className='dispBody'>
                    <img className='text-img' src={require('./img/offers/002.jpg')} alt="..."/>
                    <div className="textBody">
                        <p className="text-head">OFFER</p>
                        <h3 className="text-title">Be Early At Nike</h3>
                        <p className="text-desc">All early birds can avail a special 20% off at Nike!</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-1 p-2'>
                <div className='dispBody'>
                    <img className='text-img' src={require('./img/offers/003.jpg')} alt="..."/>
                    <div className="textBody">
                        <p className="text-head">OFFER</p>
                        <h3 className="text-title">Mid-Season Sale Alert At M&S!</h3>
                        <p className="text-desc">Amp-up your styling game with up to 50% off on your favourite M&S styles!</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-1 p-2'>
                <div className='dispBody'>
                    <img className='text-img' src={require('./img/offers/004.jpg')} alt="..."/>
                    <div className="textBody">
                        <p className="text-head">OFFER</p>
                        <h3 className="text-title">Croma's Game Of Phones</h3>
                        <p className="text-desc">Get cashback* on the purchance of the new iPhone 12.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-1 p-2'>
                <div className='dispBody'>
                    <img className='text-img' src={require('./img/offers/005.jpg')} alt="..."/>
                    <div className="textBody">
                        <p className="text-head">OFFER</p>
                        <h3 className="text-title">A Deal Not To Miss At H&M</h3>
                        <p className="text-desc">Make your pregnancy stylish, enjoy flat 40% off on the maternity collection.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  


    {/* type 2 */}
    {/* <section className='container'>
        <div className='row row002'>
            <div className=''>
                <div className='dispBody1'>
                    <div className="textBody1 col-md-3 col-sm-3">
                        <p className="text-head">JACK & JONES</p>
                    </div>
                    <div className="textBody2 col-md-6 col-sm-9">
                        <h3 className="text-title">Quirky Safety At Jack & Jones</h3>
                        <p className="text-desc">Jack & Jones is protecting you, with their mask collection at 60% off on selected merchandise.</p>
                    </div>
                    <div className="textBody3 col-md-3 col-sm-12">
                        <img className='text-img1' src={require('./img/offers/001.jpg')} alt="..."/>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='dispBody1'>
                    <div className="textBody1 col-md-3 col-sm-3">
                        <p className="text-head">JACK </p>
                    </div>
                    <div className="textBody2 col-md-6 col-sm-9">
                        <h3 className="text-title">Quirky Safety At Jack & Jones</h3>
                        <p className="text-desc">Get safety masks with a quirky update at 60% off*!</p>
                    </div>
                    <div className="textBody3 col-md-3 col-sm-12">
                        <img className='text-img1' src={require('./img/offers/002.jpg')} alt="..."/>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='dispBody1'>
                    <div className="textBody1 col-md-3 col-sm-3">
                        <p className="text-head">JACK & JONES</p>
                    </div>
                    <div className="textBody2 col-md-6 col-sm-9">
                        <h3 className="text-title">Be Early At Nike</h3>
                        <p className="text-desc">All early birds can avail a special 20% off at Nike!</p>
                    </div>
                    <div className="textBody3 col-md-3 col-sm-12">
                        <img className='text-img1' src={require('./img/offers/004.jpg')} alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    </section> */}




    {/* <!-- Events --> */}
    <section className="container offerpromo">   
        {/* <!--  --> */}
        <div>
            <div className="card offerpromo-cols">
                <div className="col-lg-6 d-flex flex-column ">
                    <div className="full-half-img p-1">
                        <img src={require('./img/offers/001.jpg')} className="text-image" alt="..."/>
                        <div className="img-title img-title-first">
                            <p className="text-head">Description Text</p>
                            <h3 className="text-title">Title</h3>
                            <p className="text-desc">Description Text</p>
                        </div>
                    </div>
                    <div className="full-half-img p-1">
                        <img src={require('./img/offers/003.jpg')} className="text-image" alt="..."/>
                        <div className="img-title">
                            <p className="text-head">Description Text</p>
                            <h3 className="text-title">Title</h3>
                            <p className="text-desc">Description Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 half-img p-1"> 
                        <img src={require('./img/offers/002.jpg')} className="text-image" alt="..."/>
                        <div className="img-title">
                            <p className="text-head">Description Text</p>
                            <h3 className="text-title">Title</h3>
                            <p className="text-desc">Description Text</p>
                        </div>
                </div>  
            </div>
            <div className="card offerpromo-cols">
                <div className="col-lg-6 half-img p-1"> 
                        <img src={require('./img/offers/004.jpg')} className="text-image" alt="..."/>
                        <div className="img-title">
                            <p className="text-head">Description Text</p>
                            <h3 className="text-title">Title</h3>
                            <p className="text-desc">Description Text</p>
                        </div>
                </div> 
                <div className="col-lg-6 d-flex flex-column ">
                    <div className="full-half-img p-1">
                        <img src={require('./img/offers/005.jpg')} className="text-image" alt="..."/>
                        <div className="img-title img-title-first">
                            <p className="text-head">Description Text</p>
                            <h3 className="text-title">Title</h3>
                            <p className="text-desc">Description Text</p>
                        </div>
                    </div>
                    <div className="full-half-img p-1">
                        <img src={require('./img/offers/001.jpg')} className="text-image" alt="..."/>
                        <div className="img-title">
                            <p className="text-head">Description Text</p>
                            <h3 className="text-title">Title</h3>
                            <p className="text-desc">Description Text</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

        {/* <!--  --> */}
        <div className="card offerpromo-cols">
            <div className="col-lg-6 half-img p-1"> 
                <img src={require('./img/offers/002.jpg')} className="text-image" alt="..."/>
                <div className="img-title">
                    <p className="text-head">Description Text</p>
                    <h3 className="text-title">Title</h3>
                    <p className="text-desc">Description Text</p>
                </div>
            </div>  
            <div className="col-lg-6 half-img p-1"> 
                    <img src={require('./img/offers/003.jpg')} className="text-image" alt="..."/>
                    <div className="img-title">
                        <p className="text-head">Description Text</p>
                        <h3 className="text-title">Title</h3>
                        <p className="text-desc">Description Text</p>
                    </div>
            </div>  
        </div>

        {/* <!--  --> */}
        <div className="d-flex mt-4 mb-5">
            <button type="button" className="all-btn">Load more</button>
        </div>
    </section>




    </div>
  );
}

export default Offerpromo;
