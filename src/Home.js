import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import './css/theshopstyle.css';
import './css/newstyle.css';

import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from 'react-calendar';

import Header from './Header';
import Footer from './Footer';
import Malls from './Malls';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Privacypolicy from './Privacypolicy';
import Termsandconditions from './Termsandconditions';
import Offerpromo from './Offerpromo';
import Collections from './Collections';
import Shop from './Shop';
import ShopDetails from './ShopDetails';


function Home() {
  return (
    <div className="App head">
        
        <Header/>
        
        {/* First Image Slider  */}
        <section id="home-first-slider" className="container first-slider">
        <Carousel className='top-slider'>
            <Carousel.Item className='top-slide-body'>
                <div className="col">
                    <img
                    className="top-slider-img d-block w-100"
                    src={require("./img/offers/001.jpg")}
                    alt=""
                    />
                    <Carousel.Caption className='top-slider-text'>
                        <p className="heading-type">Type</p>
                        <h3 className="heading-title">Title</h3>
                        <p className="heading-description">Description first slide.</p>
                        <button type="button" className="btn btn-outline-light heading-button">Explore</button>
                    </Carousel.Caption> 
                </div>
            </Carousel.Item>
            <Carousel.Item  className='top-slide-body'>
                <img
                className="top-slider-img d-block w-100"
                src={require("./img/offers/002.jpg")}
                alt=""
                />
                <Carousel.Caption className='top-slider-text'>
                    <p className="heading-type">Type</p>
                    <h3 className="heading-title">Title</h3>
                    <p className="heading-description">Description first slide.</p>
                    <button type="button" className="btn btn-outline-light heading-button">Explore</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='top-slide-body'>
                <img
                className="top-slider-img d-block w-100"
                src={require("./img/offers/003.jpg")}
                alt=""
                />
                <Carousel.Caption className='top-slider-text'>
                    <p className="heading-type">Type</p>
                    <h3 className="heading-title">Title</h3>
                    <p className="heading-description">Description first slide.</p>
                    <button type="button" className="btn btn-outline-light heading-button">Explore</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            
        </section>

        {/*  Malls  */}
        <section className="container homeMalls">
            <div className="d-flex justify-content-center">
                <h2 className="heading-2">Malls</h2>
            </div>
            <Carousel className='other-slider '>
                <Carousel.Item className='other-slider-slide'>
                    <div className="slider-slide-body height-500 left-double col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide height-250 ">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/001.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-left-top slider-text-left'>
                                <h3 className="temp-title">Title</h3>
                            </div>
                        </div>
                        <div className="slider-slide-body slider-slide height-250 ">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/002.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-left'>
                            <h3 className="temp-title">Title</h3>
                            </div>
                        </div>
                         
                    </div>
                    <div className="slider-slide-body height-500 col-md-6 col-sm-12 p-1 pt-0">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/003.jpg")}
                            alt=""
                            />
                           <div className='slider-text slider-text-right'>
                           <h3 className="temp-title">Title</h3>
                           </div>     
                        </div>
                    </div>
                </Carousel.Item> 

            </Carousel>
            
            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All Malls</button>
            </div>
        </section>




        {/*  Shops  */}
        <section className="container ">
            <div className="d-flex justify-content-center">
                <h2 className="heading-2">Shops</h2>
            </div>

            <Carousel className='other-slider'>
                <Carousel.Item className='multi-line-slider'>
                    <div className="temp001 col-md-6 col-sm-12 p-1">
                        <div>
                            <div className='text-cantainer'>
                                <img className="slider-img d-block w-100 height-250" src={require("./img/homeShops/les_petits.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div> 
                        </div>
                        <div>
                            <div className='text-cantainer'>
                                <img className="slider-img d-block w-100 height-250" src={require("./img/homeShops/mini_klub.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div>
                        </div>   
                    </div>
                    <div className="temp001 col-md-6 col-sm-12 p-1">
                        <div>
                            <div className='text-cantainer'>
                                <img className="slider-img d-block w-100 height-250" src={require("./img/homeShops/minizmo.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div>
                            </div> 
                        </div>
                        <div>
                            <div className='text-cantainer'>
                                <img className="slider-img d-block w-100 height-250" src={require("./img/homeShops/mulmul.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div>
                        </div>      
                    </div>
                </Carousel.Item>
                <Carousel.Item className='multi-line-slider'>
                    <div className="temp001 col-md-6 col-sm-12 p-1">
                        <div>
                            <div className='text-cantainer'>
                                <img className="slider-img d-block w-100 height-250" src={require("./img/homeShops/naturalizer.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div> 
                        </div>
                        <div>
                            <div className='text-cantainer'>
                                <img className="slider-img d-block w-100 height-250" src={require("./img/homeShops/under_armour.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div>
                        </div>   
                    </div>
                    <div className="temp001 col-md-6 col-sm-12 p-1">
                        <div>
                            <div className='text-cantainer'>
                                <img className="slider-img d-block w-100 height-250" src={require("./img/homeShops/venus_steps.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div>
                            </div> 
                        </div>
                        <div>
                            <div className='text-cantainer'>
                                <img className="slider-img d-block w-100 height-250" src={require("./img/homeShops/woods.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div>
                        </div>      
                    </div>
                </Carousel.Item>
            </Carousel>

            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All Shops</button>
            </div>
        </section>



        {/*  FNL  */}
        <section className="container ">
          <div className="d-flex justify-content-center">
                <h2 className="heading-2">Collections & Launches</h2>
            </div>
            <div className="fnl-container">
                <div className="fnl-head">
                    <div>
                        <h2>FNL</h2>
                        
                    </div>
                </div>

                {/* <div className="fnl-slide">
                    <div className="col-lg-6 half-img p-1">
                        <img src={require("./img/offers/002.jpg")} className="d-block w-100" alt="..."/>
                        <div className="img-title">
                            <h3 className="">Title</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 half-img p-1">
                        <img src={require("./img/offers/003.jpg")} className="d-block w-100" alt="..."/>
                        <div className="img-title">
                            <h3 className="">Title</h3>
                        </div>
                    </div>
                </div> */}



            <Carousel className='other-slider '>
                <Carousel.Item className='other-slider-slide'>
                    <div className="slider-slide-body height-350 col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100 "
                            src={require("./img/offers/001.jpg")}
                            alt=""
                            />
                           <div className='slider-text slider-text-left'>
                           <h3 className="temp-title">Title</h3>
                           </div>     
                        </div>
                    </div>
                    <div className="slider-slide-body height-350 col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100 "
                            src={require("./img/offers/002.jpg")}
                            alt=""
                            />
                           <div className='slider-text slider-text-right'>
                           <h3 className="temp-title">Title</h3>
                           </div>     
                        </div>
                    </div>
                </Carousel.Item> 
                <Carousel.Item className='other-slider-slide'>
                    <div className="slider-slide-body height-350 col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100 "
                            src={require("./img/offers/003.jpg")}
                            alt=""
                            />
                           <div className='slider-text slider-text-left'>
                           <h3 className="temp-title">Title</h3>
                           </div>     
                        </div>
                    </div>
                    <div className="slider-slide-body height-350 col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100 "
                            src={require("./img/offers/004.jpg")}
                            alt=""
                            />
                           <div className='slider-text slider-text-right'>
                           <h3 className="temp-title">Title</h3>
                           </div>     
                        </div>
                    </div>
                </Carousel.Item> 
            </Carousel>

            </div>
            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All FNL</button>
            </div>

        </section>



        {/*  Offers & Promos  */}
        <section className="container ">
            <div className="d-flex justify-content-center">
                <h2 className="heading-2">Offers & Promos</h2>
            </div>

            <Carousel className='other-slider '>
                <Carousel.Item className='other-slider-slide'>
                    <div className="slider-slide-body height-500 left-double col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide height-250 ">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/001.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-left-top slider-text-left'>
                                <h3 className="temp-title">Title</h3>
                            </div>
                        </div>
                        <div className="slider-slide-body slider-slide height-250 ">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/002.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-left'>
                            <h3 className="temp-title">Title</h3>
                            </div>
                        </div>
                         
                    </div>
                    <div className="slider-slide-body height-500 col-md-6 col-sm-12 p-1 pt-0">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/003.jpg")}
                            alt=""
                            />
                           <div className='slider-text slider-text-right'>
                           <h3 className="temp-title">Title</h3>
                           </div>     
                        </div>
                    </div>
                </Carousel.Item> 
                
                <Carousel.Item className='other-slider-slide'>
                    <div className="slider-slide-body height-500 left-double col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide height-250 ">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/001.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-left-top slider-text-left'>
                                <h3 className="temp-title">Title</h3>
                            </div>
                        </div>
                        <div className="slider-slide-body slider-slide height-250 ">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/002.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-left'>
                            <h3 className="temp-title">Title</h3>
                            </div>
                        </div>
                         
                    </div>
                    <div className="slider-slide-body height-500 col-md-6 col-sm-12 p-1 pt-0">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/003.jpg")}
                            alt=""
                            />
                           <div className='slider-text slider-text-right'>
                           <h3 className="temp-title">Title</h3>
                           </div>     
                        </div>
                    </div>
                </Carousel.Item>
 
            </Carousel>

            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All Offers & Promos</button>
            </div>
        </section>


   
        {/* <!-- Collections & Launches --> */}
        <section className="container ">
        <div className="d-flex justify-content-center">
            <h2 className="heading-2">Collections & Launches</h2>
        </div>

        <Carousel className='other-slider'>
                <Carousel.Item className='multi-line-slider'>
                    <div className="temp001 col-md-6 col-sm-12 p-1">
                        <div>
                            <div className='text2-cantainer'>
                                <img className="slider-img d-block w-100 height-250 " src={require("./img/offers/001.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-title">Title 101</p>
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div> 
                        </div>
                        <div>
                            <div className='text2-cantainer'>
                                <img className="slider-img d-block w-100 height-250 " src={require("./img/offers/003.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-title">Title 102</p>
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div>
                        </div>   
                    </div>
                    <div className="temp001 col-md-6 col-sm-12 p-1">
                        <div>
                            <div className='text2-cantainer'>
                                <img className="slider-img d-block w-100 height-250 " src={require("./img/offers/002.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-title">Title 103</p>
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div>
                            </div> 
                        </div>
                        <div>
                            <div className='text2-cantainer'>
                                <img className="slider-img d-block w-100 height-250 " src={require("./img/offers/004.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-title">Title 104</p>
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div>
                        </div>      
                    </div>
                </Carousel.Item>

                <Carousel.Item className='multi-line-slider'>
                    <div className="temp001 col-md-6 col-sm-12 p-1">
                        <div>
                            <div className='text2-cantainer'>
                                <img className="slider-img d-block w-100" src={require("./img/offers/001.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-title">Title 201</p>
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div> 
                        </div>
                        <div>
                            <div className='text2-cantainer'>
                                <img className="slider-img d-block w-100" src={require("./img/offers/001.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-title">Title 202</p>
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div>
                        </div>   
                    </div>
                    <div className="temp001 col-md-6 col-sm-12 p-1">
                        <div>
                            <div className='text2-cantainer'>
                                <img className="slider-img d-block w-100" src={require("./img/offers/001.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-title">Title 203</p>
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div>
                            </div> 
                        </div>
                        <div>
                            <div className='text2-cantainer'>
                                <img className="slider-img d-block w-100" src={require("./img/offers/001.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-title">Title 204</p>
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div>
                        </div>      
                    </div>
                </Carousel.Item>
        </Carousel>
        <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All Collections & Launches</button>
        </div>

        </section>



        {/*  Events  */}
        <section className="container ">
            <div className="d-flex justify-content-center">
                <h2 className="heading-2">Events</h2>
            </div>

            <Carousel className='other-slider '>
                <Carousel.Item className='other-slider-slide'>
                    <div className="slider-slide-body height-500 left-double col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide height-250 ">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/001.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-left-top slider-text-left'>
                                <h3 className="temp-title">Title</h3>
                                <p class="temp-desc">Description first slide.</p>
                            </div>
                        </div>
                        <div className="slider-slide-body slider-slide height-250 ">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/002.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-left'>
                                <h3 className="temp-title">Title</h3>
                                <p class="temp-desc">Description first slide.</p>
                            </div>
                        </div>
                         
                    </div>
                    <div className="slider-slide-body height-500 col-md-6 col-sm-12 p-1 pt-0">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/003.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-right'>
                                <h3 className="temp-title">Title</h3>
                                <p class="temp-desc">Description first slide.</p>
                            </div>     
                        </div>
                    </div>
                </Carousel.Item> 
                <Carousel.Item className='other-slider-slide'>
                    <div className="slider-slide-body height-500 left-double col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide height-250 ">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/004.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-left-top slider-text-left'>
                                <h3 className="temp-title">Title</h3>
                                <p class="temp-desc">Description first slide.</p>
                            </div>
                        </div>
                        <div className="slider-slide-body slider-slide height-250 ">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/005.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-left'>
                                <h3 className="temp-title">Title</h3>
                                <p class="temp-desc">Description first slide.</p>
                            </div>
                        </div>
                         
                    </div>
                    <div className="slider-slide-body height-500 col-md-6 col-sm-12 p-1 pt-0">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100"
                            src={require("./img/offers/001.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-right'>
                                <h3 className="temp-title">Title</h3>
                                <p class="temp-desc">Description first slide.</p>
                            </div>     
                        </div>
                    </div>
                </Carousel.Item> 
            </Carousel>

            {/* <div className="card">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="multi-carousel-3 ">
                                <div className="col-lg-6 d-flex flex-column">
                                    <div className="full-half-img p-1">
                                        <img src={require("./img/offers/001.jpg")} className="d-block w-100" alt="..."/>
                                        <div className="img-title img-title-first">
                                            <h3 className="">Title</h3>
                                            <p className="">Description Text</p>
                                        </div>
                                    </div>
                                    <div className="full-half-img p-1">
                                    <img src={require("./img/offers/001.jpg")} className="d-block w-100" alt="..."/>
                                        <div className="img-title">
                                            <h3 className="">Title</h3>
                                            <p className="">Description Text</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 half-img p-1"> 
                                <img src={require("./img/offers/001.jpg")} className="d-block w-100" alt="..."/>
                                        <div className="img-title">
                                            <h3 className="">Title</h3>
                                            <p className="">Description Text</p>
                                        </div>
                                </div>  
                            </div>
                        </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
            </div> */}


            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All Events</button>
            </div>
        </section>



        {/*  Store Launches  */}
        <section className="container ">
            <div className="d-flex justify-content-center">
                <h2 className="heading-2">Store Launches</h2>
            </div>

            <Carousel className='other-slider home-store-launch'>
                <Carousel.Item className='other-slider-slide'>
                    <div className="slider-slide-body height-350 col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100 "
                            src={require("./img/offers/001.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-left'>
                                <h3 className="temp-title">Title</h3>
                            </div>     
                        </div>
                    </div>
                    <div className="slider-slide-body height-350 col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100 "
                            src={require("./img/offers/002.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-right'>
                                <h3 className="temp-title">Title</h3>
                            </div>     
                        </div>
                    </div>
                </Carousel.Item> 
                <Carousel.Item className='other-slider-slide'>
                    <div className="slider-slide-body height-350 col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100 "
                            src={require("./img/offers/003.jpg")}
                            alt=""
                            />
                            <div className='slider-text slider-text-left'>
                                <h3 className="temp-title">Title</h3>
                            </div>     
                        </div>
                    </div>
                    <div className="slider-slide-body height-350 col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide">
                            <img
                            className="slider-img d-block w-100 "
                            src={require("./img/offers/004.jpg")}
                            alt=""
                            />
                           <div className='slider-text slider-text-right'>
                           <h3 className="temp-title">Title</h3>
                           </div>     
                        </div>
                    </div>
                </Carousel.Item> 
            </Carousel>


            {/* <div className="card">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="multi-carousel-1 ">
                                <div className="col-lg-6 col-sm-12 half-img p-1"> 
                                    <img src={require("./img/offers/001.jpg")} className="d-block w-100" alt="..."/>
                                    <div className="img-title">
                                        <h3 className="">Title</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 half-img p-1"> 
                                <img src={require("./img/offers/001.jpg")} className="d-block w-100" alt="..."/>
                                    <div className="img-title">
                                        <h3 className="">Title</h3>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
            </div> */}


            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All Store Launches</button>
            </div>
        </section>



        <img src={logo} className="App-logo" alt="logo" />
        <img src={require('./logo.svg').default} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

{/* 
<Header/>
<Footer/>

<Aboutus/>
<Contactus/>
<Privacypolicy/>
<Termsandconditions/>
<Offerpromo/>
<Collections/>
<Shop/>
<ShopDetails/>
<Malls/> 
 */}



    </div>
  );
}

export default Home;
