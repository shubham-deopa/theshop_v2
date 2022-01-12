import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import './css/theshopstyle.css';

import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'

import Header from './Header';
import Footer from './Footer';

function Malls() {
  return (
    <div className="App head">
        
        <Header/>


        {/* <!-- Malls Page --> */}
        <section className="container">
            <div className="row mt-4 mb-3">
                <div className="col-lg-4 col-sm-6 ">
                    <form className="d-flex">
                        <input className="form-control rounded-0 border-end-0 border-dark" type="search" placeholder="Your Favourite Mall is?" aria-label="Search"/>
                        <button className="btn rounded-0 border-start-0 border-dark" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </form>
                </div>

            </div>
            <div className="malls-list row row-cols-lg-4 row-cols-md-3 row-cols-2 ">
                
                <div className="col col-padding">
                    <a className="" href="#">
                        <div className="card text-white">
                            <img src={require("./img/malls/Select_CITYWALK.jpg")} className="malls-img" alt="Select CITYWALK" />
                            <div className="card-img-overlay">
                            <h5 className="malls-name">Select CITYWALK</h5>
                            </div>
                        </div>
                    </a>
                </div>
                
            </div>
        </section>


        {/* <!---------- Malls Page Sign Us ----------> */}
        <section className="container mt-5">
            <div className="page-contact">
                <div className="bottom-container">

                    <div className="contact-form row ">
                        <div className="contact-form-img col-md-6 col-lg-6">
                            <div className="card">
                            <img src={require("./img/signUp.jpg")} className="card-img card-body" alt=""/>
                            </div>
                        </div>
                        <div className="contact-form-form col-md-6 col-lg-6 ">
                            <div className="card-body pt-0">
                                <p className="card-title">Sign Up For Free Insider Access To:</p>
                                <ul className="card-text">
                                    <li>Exclusive offers from select retailers</li>
                                    <li>Hear first from us on all mall offers</li>
                                    <li>Stay updated on the latest in Fashion, Lifestyle &amp; Entertainment</li>
                                </ul>
                            </div>
                            <div className="row">
                                <div>

                                </div>
                            </div>

                            {/* <!-- Form Start --> */}
                            <div className="card-body pt-0">
                                <div className="row py-3">
                                    {/* <!-- Name --> */}
                                    <div className="col-md-6 col-12">
                                        <div className="input-text-wrapper">
                                            <input type="text" name="name" placeholder="Name*" value=""/>
                                            <div className="invalid-feedback">
                                                Enter valid name
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="date-gender row">
                                            <div className="col-md-6 col-6 pe-0">
                                                {/* <!-- Date of Birth --> */}
                                                <div className="input-text-wrapper input-group date" id="contact-us-datepicker">
                                                    <input type="text" name="bob" placeholder="Date of birth*" className=""/>
                                                    <span className="input-group-append d-none">
                                                        <span className="input-group-text bg-white">
                                                            <i className="fa fa-calendar "></i>
                                                        </span>
                                                    </span>
                                                    <div className="invalid-feedback">
                                                        Select valid DOB
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-6">
                                                {/* <!-- Gender --> */}
                                                <div className="">
                                                    <select className="form-select" id="contact-us-gender" required>
                                                        <option selected disabled value="">Gender*</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="other">Other</option>
                                                        <option value="dont want to specify">Dont want to specify</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Select gender
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row py-3">
                                    <div className="col-md-6 col-12">
                                        {/* <!-- Email --> */}
                                        <div className="input-text-wrapper">
                                            <input type="email" name="email" placeholder="Email id*" value=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        {/* <!-- Phone No --> */}
                                        <div className="input-text-wrapper">
                                            <input type="phone" name="phone_number" placeholder="Phone number" maxlength="10" value=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row py-3">
                                    <div className="col-md-6 col-12">
                                        {/* <!-- Preferred Malls --> */}
                                        <div className="">
                                            <select className="form-select" id="contact-us-malls" required>
                                                <option selected disabled value="">Preferred Malls*</option>
                                                <option value="...">...</option>
                                                <option value="...">...</option>
                                                <option value="...">...</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Select preferred mall
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        {/* <!-- Preferred Brand --> */}
                                        <div className="">
                                            <select className="form-select" id="contact-us-brand" required>
                                                <option selected disabled value="">Preferred Brand*</option>
                                                <option value="...">...</option>
                                                <option value="...">...</option>
                                                <option value="...">...</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Select preferred brand
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-btn pt-3">
                                    <button type="button" className="btn float-start text-uppercase btn-outline-dark ">Submit</button></div>
                            </div>
                            {/* <!-- Form End --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
<Footer/>
<Header/>

        {/* <!-- Mall Detail Page --> */}    
        {/* <!-- Mall Name --> */}
        <section className="container">
            <div className="heading-name">
                <h1>
                    Mall Name
                </h1>
            </div>
        </section>

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
                <Carousel.Item className='top-slide-body'>
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

        {/*  Offers & Promos  */}
        <section className="container ">
            <div className="d-flex justify-content-center">
                <h2 className="heading-2">Offers & Promos</h2>
            </div>
            <Carousel className='other-slider'>
                <Carousel.Item className='other-slider-slide'>
                    <div className="slider-slide-body hight-350 col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide">
                        <img
                        className="slider-img d-block w-100"
                        src={require("./img/offers/001.jpg")}
                        alt=""
                        />
                        <div className='slider-text slider-text-left'>
                            <p className="heading-type">Type</p>
                            <h3 className="heading-title">Title</h3>
                            <p className="heading-description">Description first slide.</p>
                            <button type="button" className="btn btn-outline-light heading-button">Explore</button>
                        </div>
                        </div>
                         
                    </div>
                    <div className="slider-slide-body hight-350 col-md-6 col-sm-12 p-1 ">
                        <div className="slider-slide-body slider-slide">
                        <img
                        className="slider-img d-block w-100"
                        src={require("./img/offers/002.jpg")}
                        alt=""
                        />
                        <div className='slider-text slider-text-right'>
                            <p className="heading-type">Type</p>
                            <h3 className="heading-title">Title</h3>
                            <p className="heading-description">Description first slide.</p>
                            <button type="button" className="btn btn-outline-light heading-button">Explore</button>
                        </div>     
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='other-slider-slide'>
                    <div className="slider-slide-body hight-350 col-md-6 col-sm-12 p-1">
                        <div className="slider-slide-body slider-slide">
                        <img
                        className="slider-img d-block w-100"
                        src={require("./img/offers/003.jpg")}
                        alt=""
                        />
                        <div className='slider-text slider-text-left'>
                            <p className="heading-type">Type</p>
                            <h3 className="heading-title">Title</h3>
                            <p className="heading-description">Description first slide.</p>
                            <button type="button" className="btn btn-outline-light heading-button">Explore</button>
                        </div> 
                        </div>
                        
                    </div>
                    <div className="slider-slide-body hight-350 col-md-6 col-sm-12 p-1 ">
                        <div className="slider-slide-body slider-slide">
                        <img
                        className="slider-img d-block w-100"
                        src={require("./img/offers/004.jpg")}
                        alt=""
                        />
                        <div className='slider-text slider-text-right'>
                            <p className="heading-type">Type</p>
                            <h3 className="heading-title">Title</h3>
                            <p className="heading-description">Description first slide.</p>
                            <button type="button" className="btn btn-outline-light heading-button">Explore</button>
                        </div>     
                        </div>
                        
                    </div>
                </Carousel.Item>
            </Carousel>    
        </section>


        {/* <!-- Mall Detail --> */}
        <section className="container ">
            <div className="mall-name2">
                <h2>
                    Mall Name
                </h2>
            </div>
            <div className="mall-description mb-3" >
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={require('./img/malls/Select_CITYWALK.jpg')} className="img-fluid rounded-start" alt=""/>
                    </div>
                    <div className="col-md-9 m-auto">
                        <div className="">
                            <p className="mall-description-text">
                                Select CITYWALK is a vibrant and upscale destination shopping center in the heart of Delhi. It comprises of India’s first six-screen PVR Cinemas. It has over 200 lifestyle brands that make it a one-stop destinationfor all.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Services & Facilities --> */}
        <section className="container services-facilities">
            <div className="s-f">
                <h3 className="text-center">Services & Facilities</h3>
                <p>To Make Your Experience Exceptional, Make the Most of Their Range of Services & Facilities, Including-</p>
            </div>
            
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Personal Shopping Service
                    </Accordion.Header>
                    <Accordion.Body>
                        A special shopping experience where their guide will personally assist you with all your needs.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Wifi
                    </Accordion.Header>
                    <Accordion.Body>
                        Always stay connected while you shop.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Tailor
                    </Accordion.Header>
                    <Accordion.Body>
                        Select CityWalk offers tailoring service to all their customer so that everything fits perfectly.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        Hands Free Shopping
                    </Accordion.Header>
                    <Accordion.Body>
                        Take the weight off your shoulders with their shopping assistant.
                    </Accordion.Body>
                </Accordion.Item>               
            </Accordion>
            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">VIEW ALL SERVICES & FACILITIES</button>
            </div>

        </section>

        {/* <!-- Additional Information --> */}
        <section className="container additional-info">
        <div className="s-f">
            <h3 className="text-center">Additional Information</h3>
        </div>        
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Address
                    </Accordion.Header>
                    <Accordion.Body>
                        A-3, Saket District Centre, District Centre, Sector 6, Pushp Vihar, New Delhi, 110017
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Contact Number
                    </Accordion.Header>
                    <Accordion.Body>
                        011- 4211 4200
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Timings
                    </Accordion.Header>
                    <Accordion.Body>
                        11:00 AM – 11:00 PM
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
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
                                <img className="slider-img d-block w-100" src={require("./img/offers/001.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-title">Title 101</p>
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div> 
                            </div> 
                        </div>
                        <div>
                            <div className='text2-cantainer'>
                                <img className="slider-img d-block w-100" src={require("./img/offers/001.jpg")}/>
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
                                <img className="slider-img d-block w-100" src={require("./img/offers/001.jpg")}/>
                                <div className="text2-body">
                                    <p className="slider-text2-title">Title 103</p>
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001.</p>
                                </div>
                            </div> 
                        </div>
                        <div>
                            <div className='text2-cantainer'>
                                <img className="slider-img d-block w-100" src={require("./img/offers/001.jpg")}/>
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


        </section>

<Footer/>
    </div>
  );
}

export default Malls;
