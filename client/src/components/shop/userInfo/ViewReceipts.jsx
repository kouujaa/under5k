import React, { Component } from "react";
import { Card, CardBody, CardFooter } from "reactstrap";
import axios from "axios";
import { motion } from "framer-motion";

class ViewReceipts extends Component {
  state = { receipts: [] };

  // async getInfo() {}

  async componentDidMount() {
    console.log(this.props.email);
    try {
      const receipts = await axios.post("/api/customers/receipts", {
        email: this.props.email
      });
      console.log(receipts.data);
      this.setState({ receipts: receipts.data });
    } catch (err) {
      console.log(err.message);
      return;
    }
  }
  showit = () => {
    const { receipts } = this.state;
    const show = receipts.map(receipt => (
      <Card>
        <CardBody>
          <p>Item bougth: {receipt.itemIDS.length}</p>
          <p>Reference Nó: {receipt.refNumber}</p>

          <p>Purchase date: {receipt.dateOfPurchase.slice(0, 9)}</p>
        </CardBody>
        <CardFooter>
          <p>charge: ₦{receipt.charge}</p>
        </CardFooter>
      </Card>
    ));
    return show;
  };

  render() {
    const { receipts } = this.state;

    return (
      <motion.div
        className="container center mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {receipts ? this.showit() : <Card>payment history unavailable</Card>}
      </motion.div>
    );
  }
}

export default ViewReceipts;
