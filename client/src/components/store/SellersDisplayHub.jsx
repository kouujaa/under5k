import React, { Component } from "react";
class SellersDisplayHub extends Component {
  state = { sellersInfo };

  async componentDidMount() {
    try {
      const sellersInfo = axios.get("/api/seller/sellersLUD");
      this.setState({ sellersInfo });
    } catch (err) {
      console.log("from display sellers hub sellersDisplayHub component");
    }
  }

  displayshops = () => {
    const { sellersInfo } = this.state;
  };

  render() {
    return <div></div>;
  }
}

export default SellersDisplayHub;
