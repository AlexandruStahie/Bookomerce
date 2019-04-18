import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ProductListItem = props => {
  const { product, addToCart } = props;
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
        <NavLink to={`details/${product.id}`} style={{ color: "white" }}>
          <button className="details-btn" onClick={() => {}}>
            Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
};

ProductListItem.defaultProps = {};

export default ProductListItem;
