import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./containers/Products";
import Cart from "./containers/Cart";

const routes = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/cart" component={Cart} />
  </Switch>
);

export default routes;
