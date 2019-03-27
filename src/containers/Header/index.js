import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { cart } = this.props;
    return (
      <div
        style={{
          height: "4rem",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#162b75",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div className="logo">
          <NavLink to="/">Bookomerce</NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Products</NavLink>
            </li>
            <li>
              {cart.length > 0 ? (
                <NavLink to="/cart">{`Cart(${cart.length})`}</NavLink>
              ) : (
                <NavLink to="/cart">{`Cart`}</NavLink>
              )}
            </li>
            <li>
              <NavLink to="/">User</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(
  mapStateToProps,
  null
)(Navigation);
