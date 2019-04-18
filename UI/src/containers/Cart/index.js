import React, { Component } from "react";
import { remove, add, deleteItemType } from "../../actions/cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { InfiniteLoader, Table, Column, AutoSizer } from "react-virtualized";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Button from "@material-ui/core/Button";
import "./style.css";
import "react-virtualized/styles.css";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getItemsQuantity = cartItems => {
    const reducer = (accumulator, item) => {
      const filteredItem = accumulator.filter(e => e.id === item.id)[0];

      filteredItem !== undefined
        ? filteredItem.quantity++
        : accumulator.push({ ...item, quantity: 1 });

      return accumulator;
    };
    return cartItems.reduce(reducer, []);
  };

  isRowLoaded = ({ index }) => {
    const { cart } = this.props;
    const cartWithQuantity = this.getItemsQuantity(cart);
    return !!cartWithQuantity[index];
  };

  loadMoreRows = ({ startIndex, stopIndex }) => {
    console.log("loadMoreRows: ", startIndex, stopIndex);
  };

  actionCell = data => {
    const { deleteItemType } = this.props;
    const cartItemCpy = Object.assign({}, data.rowData);
    delete cartItemCpy.quantity;
    return (
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => deleteItemType(cartItemCpy)}
      >
        <DeleteOutlinedIcon />
      </Button>
    );
  };

  quantityCell = data => {
    const { add, remove } = this.props;
    const cartItemCpy = Object.assign({}, data.rowData);
    delete cartItemCpy.quantity;

    return (
      <div
        style={{
          width: "rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "align-stat"
        }}
      >
        <div
          style={{
            border: "1px solid grey",
            padding: "0.65rem",
            heigth: "1rem",
            width: "2rem",
            alignItems: "flex-end"
          }}
        >
          {data.rowData.quantity}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button onClick={() => add(cartItemCpy)}>+</button>
          <button onClick={() => remove(cartItemCpy)}>-</button>
        </div>
      </div>
    );
  };

  priceCell = data => {
    const totalCost = data.rowData.price * data.rowData.quantity;
    return <h3>{`${totalCost.toFixed(2)} $`}</h3>;
  };

  productNameCell = data => {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          style={{ display: "flex", alignItems: "center" }}
          role="presentation"
          height={150}
          width={100}
          title={data.rowData.name}
          src={`/products/${data.rowData.image}`}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "1rem",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          }}
        >
          <h2>{data.rowData.name}</h2>
        </div>
      </div>
    );
  };

  render() {
    const { cart } = this.props;
    const cartWithQuantity = Object.assign([], this.getItemsQuantity(cart));
    cartWithQuantity.sort((a, b) => {
      return a.id - b.id;
    });

    let totalCost = 0;
    // eslint-disable-next-line
    cartWithQuantity.map(e => (totalCost = totalCost + e.price * e.quantity));

    return (
      <div className="cart">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1>My Cart</h1>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2>{`Total price: ${totalCost.toFixed(2)} $`}</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={this.submitForm}
            >
              Finalize the order
            </Button>
          </div>
        </div>
        <hr />

        <InfiniteLoader
          isRowLoaded={this.isRowLoaded}
          loadMoreRows={this.loadMoreRows}
          rowCount={cartWithQuantity.length + 1}
        >
          {({ onRowsRendered, registerChild }) => (
            <div>
              <AutoSizer>
                {({ width }) => (
                  <Table
                    ref={registerChild}
                    onRowsRendered={onRowsRendered}
                    width={width}
                    height={600}
                    headerHeight={50}
                    rowHeight={200}
                    rowCount={cartWithQuantity.length}
                    rowGetter={({ index }) => cartWithQuantity[index]}
                  >
                    <Column
                      width={(width - 150) / 2}
                      label="Product"
                      dataKey=""
                      cellRenderer={this.productNameCell}
                    />
                    <Column
                      width={(width - 150) / 4}
                      label="Quantity"
                      dataKey=""
                      cellRenderer={this.quantityCell}
                    />
                    <Column
                      width={(width - 150) / 4}
                      label="Price"
                      dataKey=""
                      cellRenderer={this.priceCell}
                    />
                    <Column
                      label="Actions"
                      width={150}
                      dataKey=""
                      cellRenderer={this.actionCell}
                    />
                  </Table>
                )}
              </AutoSizer>
            </div>
          )}
        </InfiniteLoader>
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
  return bindActionCreators({ remove, add, deleteItemType }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
