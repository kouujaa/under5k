import React, { Component } from "react";
import { PaystackConsumer } from "react-paystack";
import { Button, Card, CardBody, CardFooter } from "reactstrap";

class PayStackPortal extends Component {
  componentDidMount;
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
        this.props.history.replace("/");
      },
      onClose: () => {
        this.props.history.goBack();
      }
    };
    console.log(this.props);
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
                  PAY
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
