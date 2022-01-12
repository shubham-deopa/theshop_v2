import logo from './logo.svg';
import './css/bootstrap.min.css';
import './css/theshopstyle.css';
// import { Route, Switch } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'

import Header from './Header';
import Footer from './Footer';
import Malls from './Malls';
import Aboutus from './Aboutus';

import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <div className="head">
        <link to="/">About us</link>
        <link to="/Malls">malls us</link>
        <br />
    <a href='/'>home</a>
    <a href='/Aboutus'>About US</a>
    <a href='/Malls'>Malls</a>


    </div>
  );
}

export default Menu;
