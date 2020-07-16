import React, { Component } from "react";
import { PaystackConsumer } from "react-paystack";
import { Button, Card, CardBody, CardFooter } from "reactstrap";
import { ReactComponent as Wallet } from "./../svgs/wallet2.svg";
import axios from "axios";

class PayStackPortal extends Component {
  handleSuccess = async (cart, status) => {
    //update status of products to sold
    try {
      const ans = await axios.post("/api/product/updateMany", {
        cart,
        status
      });
    } catch (err) {
      console.log(err);
    }
    //send receipt to admin
    try {
      const ans = await axios.post("/api/admin/receipt", {
        refNumber: this.props.location.state.config.reference,
        email: this.props.location.state.config.email,
        charge: this.props.location.state.config.amount,
        itemIDS: this.props.location.state.cart
      });
    } catch (err) {
      console.log(err);
    }
    // add items to user purchased list --IIP
    try {
      const ans = await axios.post("/api/product/updatePurchase", {
        cart
      });
    } catch (err) {
      console.log(err.message);
    }
    // try {
    //   const prod = await axios.post("/api/seller/updateMeta", {
    //     cart
    //   });

    //   console.log(prod.data);
    // } catch (err) {
    //   console.log(err.message);

    // }
    window.location = "/";
  };
  handleFailure = async () => {};
  componentDidMount() {
    //check if cart items are available...
    //if not redirect back to shop saying an item has been bought by someone else
  }

  render() {
    const componentProps = {
      reference: this.props.location.state.config.reference,
      email: this.props.location.state.config.email,
      amount: this.props.location.state.config.amount,
      publicKey: this.props.location.state.config.publicKey,
      text: "Paystack Button Implementation",
      onSuccess: () => {
        this.handleSuccess(this.props.location.state.cart, "sold");
      },
      onClose: () => {
        this.handleFailure();
        this.props.history.goBack();
      }
    };

    const { FirstName, lastName } = this.props.location.state.details;
    return (
      <Card className="container center mt-5 mb-5">
        <CardBody className="container center">
          TOTAL CHARGE TO {lastName.toUpperCase()} {FirstName}: ₦
          {this.props.location.state.config.amount / 100}
        </CardBody>
        <CardFooter>
          <div className="container center">
            {/* <PaystackHookExample config={config} /> */}
            {/* <PaystackButton {...componentProps} /> */}
            <PaystackConsumer {...componentProps}>
              {({ initializePayment }) => (
                <Button
                  className="btn btn-success"
                  onClick={() => initializePayment()}
                >
                  PAY <Wallet />
                </Button>
              )}
            </PaystackConsumer>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default PayStackPortal;

// async metacall() {
//   try {
//     const { shopName } = this.props.user;
//     const prod = await axios.post("/api/seller/updateMeta", {
//       shopName
//     });

//     console.log(prod.data);
//   } catch (err) {
//     console.log(err.message);
//     // this.populateState();
//   }
// }
