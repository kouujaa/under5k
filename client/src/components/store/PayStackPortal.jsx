import React, { Component } from "react";
import { PaystackConsumer } from "react-paystack";
import { Button, Card, CardBody, CardFooter } from "reactstrap";
import { ReactComponent as Wallet } from "./../svgs/wallet2.svg";
import axios from "axios";

class PayStackPortal extends Component {
  handleCart = async (cart, status) => {
    //update status of products to sold
    try {
      const ans = await axios.post("/api/product/updateMany", {
        cart,
        status
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
      console.log(err);
    }
  };

  componentDidMount() {
    //check if cart items are available...
    //if not redirect back to shop saying an item has been bought by someone else
  }

  render() {
    // const config = {
    //   reference: new Date().getTime(),
    //   email: this.props.location.state.config.email,
    //   amount: this.props.location.state.config.amount,
    //   publicKey: "pk_test_f3deda0f23ed680ded6e89fe2a51740a7e23979e"
    // };

    const componentProps = {
      reference: new Date().getTime(),
      email: this.props.location.state.config.email,
      amount: this.props.location.state.config.amount,
      publicKey: "pk_test_f3deda0f23ed680ded6e89fe2a51740a7e23979e",
      text: "Paystack Button Implementation",
      onSuccess: () => {
        this.handleCart(this.props.location.state.cart, "sold");
        this.props.history.replace("/");
      },
      onClose: () => {
        this.handleCart(this.props.location.state.cart, "available");
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
