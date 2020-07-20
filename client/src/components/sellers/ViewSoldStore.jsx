import React, { Component } from "react";
import jwtDecoder from "jwt-decode";
import Paginate from "./../all/Pagination";
import { pages } from "./../../utils/pages";
import axios from "axios";
import SellerSoldProductDisplay from "./SellerSoldProductDisplay";
import { withCookies } from "react-cookie";

class ViewSoldStore extends Component {
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
      window.location = "/";
    } catch (err) {
      console.log(err.message);
      this.props.history.push({
        pathname: "/sellerDashBoard/viewSoldStore",
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
      const products = await axios.post("/api/product/byShop/by", {
        shopName: jwtDecoder(cookies.get("token")).shopName,
        by: "sold"
      });
      this.setState({ products: products.data });
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const { pageSize, currentPage, products } = this.state;
    const sendDown = pages(products, currentPage, pageSize);

    return (
      <div>
        <SellerSoldProductDisplay
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

export default withCookies(ViewSoldStore);
