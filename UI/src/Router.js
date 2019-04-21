import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Details from "./containers/Details";
import UserPage from "./containers/UserPage";
import authService from './common/authService';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/details/:id" component={Details} />
    <ProtectedRoute path={'/userPage'} component={UserPage} />
  </Switch>
);


const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={(props) => (
      authService.isAuthenticated()
        ? <Component {...props} />
        : <Redirect to={
          {
            pathname: '/login',
            state: { target: props.location }
          }
        } />
    )}
  />
);

export default routes;
