import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Details from "./containers/Details";

const routes = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/details/:id" component={Details} />
  </Switch>
);

export default routes;
