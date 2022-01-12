import logo from './logo.svg';
import './css/bootstrap.min.css';
import './css/theshopstyle.css';

import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'

import Header from './Header';
import Footer from './Footer';

function Contactus() {
  return (
    <div className=" head">
        
        <Header/>


    {/* <!---------- Contact Us ----------> */}
    <section className="container">
        <div className="page-contact">
            <div className="top-container">
                <h1 className="text-center">CONTACT US</h1>
            </div>
            <div className="bottom-container">
                <p>Thanks For visiting theshops.in. Whether you are a reader, a retail brand, or an advertiser, we
                    always love to hear from you. Suggestions and questions are always welcome! Here is how you can
                    reach the right member of our team:</p>
                <h5>ADVERTISING</h5>
                <p>For more information on how to advertise on theshops.in, drop in a line at:
                     <a href="mailto:advertising@theshops.in">advertising@theshops.in</a>
                </p>
                <h5>PARTNERSHIP</h5>
                <p>Your brand wants to partner with us? Great! Reach out to:
                    <a href="mailto:partners@theshops.in">partners@theshops.in</a>
                </p>
                <h5>LETTERS TO THE EDITOR</h5>
                <p>If you have suggestions or questions regarding our content, or if you would like to contribute a
                    story idea, drop us a line at
                     <a href="mailto:editor@theshops.in">editor@theshops.in</a>
                </p>
                <h5>GENERAL INQUIRIES</h5>
                <p>For general outreach, email:
                     <a href="mailto:contact@theshops.in">contact@theshops.in</a>
                </p>
                <div className="contact-form row ">
                    <div className="contact-form-img col-md-6 col-lg-6">
                        <div className="card">
                            <img className="card-img card-body" src={require('./img/signUp.jpg')} alt="" />
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
                                        <input type="text" name="name" placeholder="Name*" value="" />
                                        <div className="invalid-feedback">
                                            Enter valid name
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="date-gender row">
                                        <div className="col-md-6 col-6">
                                            {/* <!-- Date of Birth --> */}
                                            <div className="input-text-wrapper input-group date" id="contact-us-datepicker">
                                                <input type="text" name="bob" placeholder="Date of birth*" className="" />
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
                                        <input type="email" name="email" placeholder="Email id*" value="" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    {/* <!-- Phone No --> */}
                                    <div className="input-text-wrapper">
                                        <input type="phone" name="phone_number" placeholder="Phone number" maxlength="10" value="" />
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
                                <button type="button" className="btn  text-uppercase btn-outline-dark ">Submit</button>
                            </div>
                        </div>
                        {/* <!-- Form End --> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

<Footer/>
    </div>
  );
}

export default Contactus;
