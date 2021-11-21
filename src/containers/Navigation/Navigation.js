import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { LinkingWrapper } from './Navigation.styles';
import Home from '../Home/Home';

const Navigation = () => (
  <Router>
    <LinkingWrapper>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/shop" activeClassName="selected">Shop</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/shop">
          <div>Hello it is shop</div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </LinkingWrapper>
  </Router>
);

export default Navigation;