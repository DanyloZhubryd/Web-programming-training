import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { LinkingWrapper } from './Navigation.styles';
import Home from '../Home/Home';
import { Catalogue } from "containers/Catalogue/Catalogue";
import { BirdPage } from "containers/BirdPage/BirdPage";
import { CartPage } from "containers/CartPage/CartPage";

const Navigation = () => (
  <Router>
    <LinkingWrapper>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/catalogue" activeClassName="selected">Catalogue</NavLink>
        </li>
        <li>
          <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/catalogue" element={<Catalogue />}/>
        <Route exact path="/bird/:birdId" element={<BirdPage />}/> 
        <Route exact path="/cart" element={<CartPage />}/>
      </Routes>
    </LinkingWrapper>
  </Router>
);

export default Navigation;