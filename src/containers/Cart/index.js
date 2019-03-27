import React, { Component } from "react";
import { remove, add, deleteItemType } from "../../actions/cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { InfiniteLoader, Table, Column, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css";
import "./style.css";

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
    // const {
    //   Text,
    //   Patients,
    //   PageNumber,
    //   NumTotalPages,
    //   DateOfBirth,
    //   ItemsPerPage,
    //   NumTotalPatients
    // } = this.state;

    // if (NumTotalPages > PageNumber && NumTotalPatients > Patients.length) {
    //   const nextPage = PageNumber + 1;

    //   GetAllPatients({
    //     Text,
    //     DateOfBirth,
    //     ItemsPerPage,
    //     PageNumber: nextPage
    //   }).then(data => {
    //     this.setState({
    //       loading: false,
    //       Patients: Patients.concat(data.Patients),
    //       NumTotalPatients: data.NumTotalPatients,
    //       NumTotalPages: data.NumTotalPages,
    //       PageNumber: nextPage
    //     });
    //   });
    // }
  };

  actionCell = data => {
    const { deleteItemType } = this.props;
    const cartItemCpy = Object.assign({}, data.rowData);
    delete cartItemCpy.quantity;
    return (
      <div style={{ marginLeft: "1rem" }}>
        <button
          className="remove-btn"
          onClick={() => deleteItemType(cartItemCpy)}
        >
          X
        </button>
      </div>
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

  render() {
    const { cart } = this.props;
    const cartWithQuantity = Object.assign([], this.getItemsQuantity(cart));
    cartWithQuantity.sort((a, b) => {
      return a.id - b.id;
    });

    return (
      <div className={"cart"}>
        <h1>My Cart</h1>
        <hr />
        <InfiniteLoader
          isRowLoaded={this.isRowLoaded}
          loadMoreRows={this.loadMoreRows}
          rowCount={cartWithQuantity.length + 1}
        >
          {({ onRowsRendered, registerChild }) => (
            <div className="custom-infinite-table">
              <AutoSizer>
                {({ width }) => (
                  <Table
                    ref={registerChild}
                    onRowsRendered={onRowsRendered}
                    width={width}
                    height={600}
                    headerHeight={50}
                    rowHeight={55}
                    rowCount={cartWithQuantity.length}
                    rowGetter={({ index }) => cartWithQuantity[index]}
                  >
                    <Column
                      width={(width - 150) / 2}
                      label="Product"
                      dataKey="name"
                    />
                    <Column
                      width={(width - 150) / 2}
                      label="Quantity"
                      dataKey=""
                      cellRenderer={this.quantityCell}
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
