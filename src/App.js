import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import './css/theshopstyle.css';


import Header from './Header';
import Footer from './Footer';



function App() {
  return (
    <div className="App head">

        <Header/>
        
        {/*  Home First Image Slider  */}
        <section id="home-first-slider" className="container first-slider">
            <div className="card">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                          <img src={require("./img/offers/001.jpg")} className="full-img-slide d-block w-100" alt="..." />
                          <div className="carousel-caption slider-text1 d-none d-md-block">
                            <p className="heading-type">Type</p>
                            <h3 className="heading-title">Title</h3>
                            <p className="heading-description">Description first slide.</p>
                            <button type="button" className="btn btn-outline-light heading-button">Explore</button>
                          </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                          <img src={require("./img/offers/002.jpg")} className="full-img-slide d-block w-100" alt="..." />
                          <div className="carousel-caption slider-text1 d-none d-md-block">
                            <p className="heading-type">Type</p>
                            <h3 className="heading-title">Title</h3>
                            <p className="heading-description">Description first slide.</p>
                            <button type="button" className="btn btn-outline-light heading-button">Explore</button>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img src={require("./img/offers/003.jpg")} className="full-img-slide d-block w-100" alt="..." />
                          <div className="carousel-caption slider-text1 d-none d-md-block">
                            <p className="heading-type">Type</p>
                            <h3 className="heading-title">Title</h3>
                            <p className="heading-description">Description first slide.</p>
                            <button type="button" className="btn btn-outline-light heading-button">Explore</button>
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
        </section>

        {/*  Malls  */}
        <section className="container ">
            <div className="d-flex justify-content-center">
                <h2 className="heading-2">Malls</h2>
            </div>
            <div className="card">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="multi-carousel-1 ">
                                <div className="col-lg-6 d-flex flex-column">
                                    <div className="full-half-img p-1">
                                        <img src={require("./img/offers/001.jpg")} className="d-block w-100" alt="..." />
                                        <div className="img-title img-title-first">
                                            <h3 className="">Title</h3>
                                        </div>
                                    </div>
                                    <div className="full-half-img p-1">
                                        <img src={require("./img/offers/001.jpg")} className="d-block w-100" alt="..." />
                                        <div className="img-title">
                                            <h3 className="">Title</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 half-img p-1"> 
                                        <img src={require("./img/offers/001.jpg")} className="d-block w-100" alt=".03." />
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
            </div>
            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All Malls</button>
            </div>
        </section>

        {/*  Shops  */}
        <section className="container ">
            <div className="d-flex justify-content-center">
                <h2 className="heading-2">Shops</h2>
            </div>
            <div className="">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="multi-carousel-2 ">
                                <div className="col-lg-6 d-flex flex-column">
                                    <div className="card full-half-img p-1 mb-3">
                                        <img src={require("./img/offers/001.jpg")} className="" alt="..."/>
                                        <div className="card-body">
                                            <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001. It offers high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                        </div>
                                    </div>
                                    <div className="card full-half-img p-1 ">
                                        <img src={require("./img/offers/001.jpg")} className="" alt="..."/>
                                        <div className="card-body">
                                            <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001. It offers high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex flex-column">
                                    <div className="card full-half-img p-1 mb-3">
                                        <img src={require("./img/offers/001.jpg")} className="" alt="..."/>
                                        <div className="card-body">
                                            <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001. It offers high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                        </div>
                                    </div>
                                    <div className="card full-half-img p-1">
                                        <img src={require("./img/offers/001.jpg")} className="" alt="..."/>
                                        <div className="card-body">
                                            <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001. It offers high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                        </div>
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
            </div>
            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All Shops</button>
            </div>
        </section>

        {/*  Offers & Promos  */}
        <section className="container ">
            <div className="d-flex justify-content-center">
                <h2 className="heading-2">Offers & Promos</h2>
            </div>
            <div className="card">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="multi-carousel-1 ">
                                <div className="col-lg-6 d-flex flex-column">
                                    <div className="full-half-img p-1">
                                        <img src={require("./img/offers/001.jpg")} className="d-block w-100" alt="..."/>
                                        <div className="img-title img-title-first">
                                            <h3 className="">Title</h3>
                                        </div>
                                    </div>
                                    <div className="full-half-img p-1">
                                        <img src={require("./img/offers/001.jpg")} className="d-block w-100" alt="..."/>
                                        <div className="img-title">
                                            <h3 className="">Title</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 half-img p-1"> 
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
            </div>
            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All Offers & Promos</button>
            </div>
        </section>


        {/*  Collections & Launches  */}
        <section className="container ">
            <div className="d-flex justify-content-center">
                <h2 className="heading-2">Collections & Launches</h2>
            </div>
            <div className="">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="multi-carousel-2 ">
                                <div className="col-lg-6 d-flex flex-column">
                                    <div className="card full-half-img p-1 mb-3">
                                        <img src={require("./img/offers/001.jpg")} className="" alt="..."/>
                                        <div className="card-body">
                                            <p className="slider-text2-title">Title</p>
                                            <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001. It offers high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                        </div>
                                    </div>
                                    <div className="card full-half-img p-1 ">
                                        <img src={require("./img/offers/001.jpg")} className="" alt="..."/>
                                        <div className="card-body">
                                            <p className="slider-text2-title">Title</p>
                                            <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001. It offers high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex flex-column">
                                    <div className="card full-half-img p-1 mb-3">
                                        <img src={require("./img/offers/001.jpg")} className="" alt="..."/>
                                        <div className="card-body">
                                            <p className="slider-text2-title">Title</p>
                                            <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001. It offers high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                        </div>
                                    </div>
                                    <div className="card full-half-img p-1">
                                        <img src={require("./img/offers/001.jpg")} className="" alt="..."/>
                                        <div className="card-body">
                                            <p className="slider-text2-title">Title</p>
                                            <p className="slider-text2-text">WOODS is a premium brand by Aero Group that launched in 2001. It offers high-quality fashion leather goods and accessories for both men and women, focusing immensely on quality and introducing cutting-edge trends each season with a strong emphasis on detail and fine craftsmanship.</p>
                                        </div>
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
            </div>
            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All Collections & Launches</button>
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
                <div className="fnl-slide">
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
                </div>
            </div>
            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All FNL</button>
            </div>

        </section>

        {/*  Events  */}
        <section className="container ">
            <div className="d-flex justify-content-center">
                <h2 className="heading-2">Events</h2>
            </div>
            <div className="card">
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
            </div>
            <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">All Events</button>
            </div>
        </section>

        {/*  Store Launches  */}
        <section className="container ">
            <div className="d-flex justify-content-center">
                <h2 className="heading-2">Store Launches</h2>
            </div>
            <div className="card">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="multi-carousel-1 ">
                                <div className="col-lg-6 half-img p-1"> 
                                    <img src={require("./img/offers/001.jpg")} className="d-block w-100" alt="..."/>
                                    <div className="img-title">
                                        <h3 className="">Title</h3>
                                    </div>
                            </div>
                                <div className="col-lg-6 half-img p-1"> 
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
            </div>
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


        <Footer/>




        {/* <!-- Malls  --> */}
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


        {/* <!---------- Malls Sign Us ----------> */}
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

        {/* <!-- Mall Name --> */}
        <section className="container">
            <div className="heading-name">
                <h1>
                    Mall Name
                </h1>
            </div>
        </section>

        {/* <!-- Mall Detail --> */}
        <section className="container ">
            <div className="mall-name2">
                <h2>
                    Mall Name
                </h2>
            </div>
            <div className="mall-description card mb-3" >
                <div className="row g-0">
                <div className="col-md-3">
                    <img src="./img/malls/Select_CITYWALK.jpg" className="img-fluid rounded-start" alt=""/>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
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
            
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Personal Shopping Service
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                    A special shopping experience where their guide will personally assist you with all your needs.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Wifi
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                    Always stay connected while you shop.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Tailor
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                    Select CityWalk offers tailoring service to all their customer so that everything fits perfectly.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Hands Free Shopping
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                    Take the weight off your shoulders with their shopping assistant.
                    </div>
                </div>
                </div>
                <div className="d-flex mt-4 mb-5">
                <button type="button" className="all-btn">VIEW ALL SERVICES & FACILITIES</button>
                </div>
            </div>
        </section>

        {/* <!-- Additional Information --> */}
        <section className="container additional-info">
        <div className="s-f">
            <h3 className="text-center">Additional Information</h3>
        </div>
        
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Address
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    A-3, Saket District Centre, District Centre, Sector 6, Pushp Vihar, New Delhi, 110017
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Contact Number
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    011- 4211 4200
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Timings
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    11:00 AM – 11:00 PM
                </div>
                </div>
            </div>

            </div>
        </section>




    </div>
  );
}

export default App;
