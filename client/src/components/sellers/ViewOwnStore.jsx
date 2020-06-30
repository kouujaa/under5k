import React, { Component } from "react";
import SellerProductDisplay from "./SellerProductDisplay";
import Paginate from "./../all/Pagination";
import { pages } from "./../../utils/pages";
import axios from "axios";

class ViewOwnStore extends Component {
  state = {
    pageSize: 9,
    currentPage: 1,
    currentSeller: "",
    products: []
  };

  deleteHandler = async productID => {
    var newproducts = [...this.state.products];
    var products = newproducts.filter(
      product => product.productID !== productID
    );

    this.setState(products);
    try {
      const deletedProduct = await axios.post(`/api/product/remove`, {
        productID
      });
      window.location = "/sellerDashBoard/viewOwnStore";
    } catch (err) {
      this.props.history.push({
        pathname: "/sellerDashBoard/viewOwnStore",
        search: "",
        hash: "",
        state: { message: "invalid login dataentials!" }
      });
    }
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  async componentDidMount() {
    this.setState({ products: this.props.products });
  }

  render() {
    const { pageSize, currentPage, products } = this.state;
    const sendDown = pages(products, currentPage, pageSize);

    return (
      <div>
        <SellerProductDisplay
          products={sendDown}
          deleteHandler={this.deleteHandler}
        />

        <Paginate
          onPageChange={this.handlePageChange}
          itemsCount={products.length}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default ViewOwnStore;
