import logo from './logo.svg';
import './css/bootstrap.min.css';
import './css/theshopstyle.css';
import './css/shopstyle.css';

import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from 'react-calendar';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Header from './Header';
import Footer from './Footer';

function ShopDetails() {
    return (
        <div className="head">

<Header/>

            {/* <!-- shop Name --> */}
            <section className="container">
                <div className="shop-name">
                    <h1>
                        Shop Name
                    </h1>
                </div>
            </section>

            {/* Shop Detail Image Slider  */}
            <section id="shop-first-slider" className="container first-slider">
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

            {/* <!-- Shop Info Detail --> */}
            <section className="container ">
                <div className="shop-description card mb-3">
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img src={require('./img/shops/adidas-performance.jpg')} className="img-fluid rounded-start" alt="" />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <p className="shop-description-text ">
                                    Adidas performance has even gone beyond when it comes to delivering quality to sports, their
                                    guiding principle is to equip all athletes to achieve their “impossible”. They bring their
                                    passion for great products to athletes in all sports. This is anchored in our company’s
                                    purpose that, ‘through sport, we have the power to change lives’.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Shop Detail FNL  */}
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

            {/* <!-- Shop Detail Stores Location map --> */}



            {/* <!-- Shop Detail Collections & Launches --> */}
            <section className="container shopdetails-collect">
                <div className="d-flex justify-content-center">
                    <h2 className="heading-2">Collections & Launches</h2>
                </div>
                {/* <div className="">
                <div className="multi-carousel-2 ">
                    <div className="col-lg-6 d-flex flex-column">
                        <a href="">
                            <div className="card full-half-img p-1 mb-3">
                                <img src={require('./img/offers/001.jpg')} className="" alt="..." />
                                <div className="card-body">
                                    <p className="slider-text2-title">Title</p>
                                    <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001. It offers high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                </div>
                            </div>
                        </a>
                    </div>               
                </div>            
            </div> */}
            
                <Row sm={1} md={2} className="g-4 shopdetails-carousel">
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <div className=" d-flex flex-column">
                            <a href="">
                                <div className="card full-half-img p-1 mb-3">
                                    <img src={require('./img/offers/001.jpg')} className="" alt="..." />
                                    <div className="card-body">
                                        <p className="temp-title">Title</p>
                                        <p className="temp-desc ">WOODS high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </Row>
            </section>


            {/* <!-- Shop Detail Events --> */}

            {/*  Events  */}
            <section className="container event">
                <div className="d-flex justify-content-center">
                    <h2 className="heading-2">Events</h2>
                </div>


                <Row xs={1} md={2} className="g-4 shopdetails-event">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <div className=" d-flex flex-column">
                            <div className="card p-1 mb-3">
                                <img src={require('./img/offers/001.jpg')} className="sd-event-img" alt="..." />
                                <div className="sd-event card-body">
                                    <h3 className="temp-title">Title</h3>
                                    <p className="temp-desc">WOODS high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Row>

            </section>

            {/*  Shop Detail Store Launch  */}
            <section className="container launch">
                <div className="d-flex justify-content-center">
                    <h2 className="heading-2">Store Launch</h2>
                </div>

                <Row xs={1} md={2} className="g-4 shopdetails-launch">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <div className=" d-flex flex-column">
                            <div className="card p-1 mb-3">
                                <img src={require('./img/offers/001.jpg')} className="sd-launch-img" alt="..." />
                                <div className="sd-launch card-body">
                                    <h3 className="temp-title">Title</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Row>
            </section>


            <DatePicker className='aaaaaaa' />


            
            
<Footer/>


        </div>
    );
}

export default ShopDetails;
