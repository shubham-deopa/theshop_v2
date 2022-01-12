import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import './App.css';
import './css/bootstrap.min.css';

import './css/theshopstyle.css';
import './css/newstyle.css';

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Malls from './Malls'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Privacypolicy from './Privacypolicy'
import Termsandconditions from './Termsandconditions'
import Offerpromo from './Offerpromo'
import Collections from './Collections'
import Shop from './Shop'
import ShopDetails from './ShopDetails'
import Storelaunch from './Storelaunch'
import Events from './Events'



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <>
        <Switch>
            <Route exact path="/"  component={Home} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/malls" component={Malls} />
            <Route exact path="/contactus" component={Contactus} />
            <Route exact path="/privacypolicy" component={Privacypolicy} />
            <Route exact path="/termsandconditions" component={Termsandconditions} />
            <Route exact path="/offerpromo" component={Offerpromo} />
            <Route exact path="/collections" component={Collections} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/shopDetails" component={ShopDetails} />
            <Route exact path="/storelaunch" component={Storelaunch} />
            <Route exact path="/events" component={Events} />
        </Switch>
    </>
    );
  }
}

export default App;
