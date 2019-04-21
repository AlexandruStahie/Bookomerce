import React from "react";
import { getProductById } from "./../../staticData/products";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { add } from "../../actions/cart";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    let productId = this.props.match.params.id;
    const product = getProductById(productId);

    this.setState({
      product
    })
  }

  render() {
    const { product } = this.state
    if (product) {
      return (
        <div>
          <div
            style={{
              marginLeft: "15rem",
              marginRight: "25rem",
              marginBottom: "1rem",
              flexDirection: "row",
              display: "flex"
            }}
          >
            <NavLink to="/">
              <Button type="button" variant="contained" color="primary">
                Back
              </Button>
            </NavLink>
          </div>
          <div
            style={{
              marginLeft: "15rem",
              marginRight: "25rem",
              flexDirection: "row",
              display: "flex"
            }}
          >
            <img
              role="presentation"
              style={{ marginRight: "15rem" }}
              title={product.name}
              src={`/products/${product.image}`}
            />
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  width: "40rem"
                }}
              >
                <h1 style={{ marginTop: 0 }}>{product.name}</h1>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "2.5rem"
                }}
              >
                <h3 style={{ marginTop: 0, width: "100%", fontWeight: "normal" }}>
                  Author: {product.author}
                </h3>
                <h3 style={{ marginTop: 0, width: "100%", fontWeight: "normal" }}>
                  Price: {product.price} $
                </h3>
              </div>
              <div
                style={{
                  marginTop: "14.5rem",
                  width: "20rem"
                }}
              >
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    this.props.add(product);
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: "15rem",
              marginRight: "25rem",
              marginTop: "1rem"
            }}
          >
            <h3 style={{ marginTop: 0, width: "100%", fontWeight: "normal" }}>
              Details:A textbook is a comprehensive compilation of content in a
              branch of study. Textbooks are produced to meet the needs of
              educators, usually at educational institutions. Schoolbooks are
              textbooks and other books used in schools.[1][2] Today, many
              textbooks are published in both print format and digital formats.
            </h3>
          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ add }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
