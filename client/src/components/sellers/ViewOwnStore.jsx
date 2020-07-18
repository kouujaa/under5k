import React, { Component } from "react";
import SellerProductDisplay from "./SellerProductDisplay";
import Paginate from "./../all/Pagination";
import { pages } from "./../../utils/pages";
import jwtDecoder from "jwt-decode";
import axios from "axios";
import { withCookies } from "react-cookie";

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
      await axios.post(`/api/product/remove`, {
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
    try {
      const { cookies } = this.props;
      const products = await axios.post("/api/product/byShop/available", {
        shopName: jwtDecoder(cookies.get("token")).shopName
      });
      this.setState({ products: products.data });
    } catch (err) {}
  }

  render() {
    const { pageSize, currentPage, products } = this.state;
    let sendDown = pages(products, currentPage, pageSize);

    sendDown = sendDown.filter(product => product.status === "available");
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

export default withCookies(ViewOwnStore);
