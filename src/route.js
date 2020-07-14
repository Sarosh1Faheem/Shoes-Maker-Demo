import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/home.js'
import AboutUs from './components/aboutus.js'
import Product from './components/product.js'
import ProductList from './components/productitems.js'
import NavBar from './components/navbar.js'

function RouteConfig () {
    return (
        <div>
            <Router>
                <NavBar />
                  <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/aboutus" component={AboutUs}></Route>
                    <Route exact path="/product" component={Product}></Route>
                    <Route path="/product/:id" component={ProductList}></Route>
                    <Route path="*" component={()=><h2>Error 404 Found.!</h2>}></Route>
                  </Switch>
                
            </Router>
        </div>
    )
}

export default RouteConfig;