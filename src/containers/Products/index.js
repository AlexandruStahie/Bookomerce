import React, { Component } from "react";
import { connect } from "react-redux";
import { add } from "../../actions/cart";
import { bindActionCreators } from "redux";
import { getProducts } from "./../../staticData/products";
import ProductListItem from "./../../components/ProductListItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "./styles.css";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      hasMore: true
    };
  }

  componentDidMount() {
    const products = getProducts();

    this.setState({ products });
  }

  fetchMoreData = () => {
    const newProducts = getProducts();
    const { products, hasMore } = this.state;

    if (products.length < 500) {
      const concatedProducts = products.concat(newProducts);
      this.setState({ products: concatedProducts, hasMore });
    } else if (hasMore === true) {
      this.setState({ hasMore: false });
    }
  };

  render() {
    const { products, hasMore } = this.state;
    const { add } = this.props;

    return (
      <div style={{ marginLeft: "5rem" }}>
        <InfiniteScroll
          className="product-listing"
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row"
          }}
          dataLength={products.length}
          next={this.fetchMoreData}
          hasMore={hasMore}
          loader={hasMore ? <h4>Loading...</h4> : null}
        >
          {products.map(product => (
            <ProductListItem product={product} addToCart={add} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ add }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
