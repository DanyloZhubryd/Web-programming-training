import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { LinkingWrapper } from './Navigation.styles';
import Home from '../Home/Home';
import { Catalogue } from "containers/Catalogue/Catalogue";
import { BirdPage } from "containers/BirdPage/BirdPage";

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
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/catalogue" element={<Catalogue />}/>
        <Route exact path="/bird/:birdId" element={<BirdPage />}/> 
      </Routes>
    </LinkingWrapper>
  </Router>
);

export default Navigation;