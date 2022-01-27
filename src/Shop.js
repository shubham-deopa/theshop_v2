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

function Shop() {
  return (
    <div className="head">
       <Header/>
  

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
                    <a href="/shopdetails">
                        <div className="card text-white">
                            <img src={require('./img/shops/adidas-performance.jpg')} className="shops-img" alt="" />
                            <div className="shops-img-overlay">
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col col-padding">
                    <a href="/shopdetails">
                        <div className="card text-white">
                            <img src={require('./img/shops/aldo.jpg')} className="shops-img" alt="" />
                            <div className="shops-img-overlay">
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col col-padding">
                    <a href="/shopdetails">
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
<Footer/>           

    </div>
  );
}

export default Shop;
