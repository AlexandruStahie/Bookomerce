import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { product, addToCart } = this.props;

    return (
      <div
        className="product-list-item"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h3 style={{ marginTop: 0, height: "2rem" }}>{product.name}</h3>

        <img
          role="presentation"
          height={250}
          width={200}
          title={product.name}
          src={`/products/${product.image}`}
        />
        <div style={{ marginTop: "0.5rem" }}>${product.price}</div>
        <div
          style={{
            marginTop: "0.5rem",
            width: "15rem",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            textAlign: "center"
          }}
        >
          Author: {product.author}
        </div>
        <div>
          <button className="add-btn" onClick={() => addToCart(product)}>
            Add to cart
          </button>
          <button className="details-btn" onClick={() => {}}>
            Details
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
