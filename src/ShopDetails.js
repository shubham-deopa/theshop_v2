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

import Header from './Header';
import Footer from './Footer';

function ShopDetails() {
  return (
    <div className="head">
            
        {/* <!-- shop Name --> */}
        <section class="container">
            <div class="shop-name">
                <h1>
                    Shop Name
                </h1>
            </div>
        </section>

        {/* First Image Slider  */}
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

        {/* <!-- Shop Info Detail --> */}
        <section class="container ">
            <div class="shop-description card mb-3">
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={require('./img/shops/adidas-performance.jpg')} class="img-fluid rounded-start" alt=""/>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <p class="shop-description-text ">
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

        {/* <!-- Collections & Launches --> */}
        <section class="container collect">
            <div class="d-flex justify-content-center">
                <h2 class="heading-2">Collections & Launches</h2>
            </div>
            {/* <div class="">
                <div class="multi-carousel-2 ">
                    <div class="col-lg-6 d-flex flex-column">
                        <a href="">
                            <div class="card full-half-img p-1 mb-3">
                                <img src={require('./img/offers/001.jpg')} class="" alt="..." />
                                <div class="card-body">
                                    <p class="slider-text2-title">Title</p>
                                    <p class="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001. It offers high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                </div>
                            </div>
                        </a>
                    </div>               
                </div>            
            </div> */}
            <Row xs={1} md={2} className="g-4 multi-carousel-2">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <div class=" d-flex flex-column">
                        <a href="">
                            <div class="card full-half-img p-1 mb-3">
                                <img src={require('./img/offers/001.jpg')} class="" alt="..." />
                                <div class="card-body">
                                    <p class="slider-text2-title">Title</p>
                                    <p class="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001. It offers high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </Row>
        </section>








        {/* <!-- Malls type 1  --> */}
        <section className="container">
            <div className="row mt-4 mb-3">
                <div className="col-lg-4 col-sm-6 ">
                    <form className="d-flex">
                        <input className="form-control rounded-0 border-end-0 border-dark" type="search" placeholder="Your Favourite Mall is?" aria-label="Search" />
                        <button className="btn rounded-0 border-start-0 border-dark" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </form>
                </div>

            </div>

            <div className="shops-list row row-cols-lg-3 row-cols-md-2 row-cols-1 ">
                <div className="col col-padding">
                    <a href="">
                        <div className="card text-white">
                            <img src={require('./img/shops/adidas-performance.jpg')} className="shops-img" alt="" />
                            <div className="shops-img-overlay">
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col col-padding">
                    <a href="">
                        <div className="card text-white">
                            <img src={require('./img/shops/aldo.jpg')} className="shops-img" alt="" />
                            <div className="shops-img-overlay">
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col col-padding">
                    <a href="">
                        <div className="card text-white">
                            <img src={require('./img/shops/allen-solly.jpg')} className="shops-img" alt="" />
                            <div className="shops-img-overlay">
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            
        </section>

        {/* Malls type 2 */}
        <section className="container">
            <Row xs={1} md={3} className="g-4 shops-list">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card className='text-white'>
                            <Card.Img className='shops-img' variant="top" src={require('./img/shops/allen-solly.jpg')} />
                            <Card.Body className="shops-img-overlay">
                                {/* <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
        

    </div>
  );
}

export default ShopDetails;
