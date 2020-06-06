import React, { Component } from "react";
import { Card, CardBody, CardFooter } from "reactstrap";
import { Route, Link } from "react-router-dom";
import UploadProduct from "./UploadProduct";
import ManageStore from "./ManageStore";
import ShopDetails from "./ShopDetails";

class SellerDasboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Welcome seller name</h2>
        <Card>
          <CardBody></CardBody>
          <CardFooter>
            <Link to="/uploadProduct">Upload To Your Store</Link>
          </CardFooter>
        </Card>
        <Card>
          <CardBody></CardBody>
          <CardFooter>
            <Link to="/manageStore">Manage Store</Link>
          </CardFooter>
        </Card>
        <Card>
          <CardBody></CardBody>
          <CardFooter>
            <Link to="shopdetails">Shop And Profile Info</Link>
          </CardFooter>
        </Card>
        <div>
          <Route path="/uploadProduct">
            <UploadProduct />
          </Route>
          <Route path="/manageStore">
            <ManageStore />
          </Route>
          <Route path="/shopdetails">
            <ShopDetails />
          </Route>
        </div>
      </div>
    );
  }
}

export default SellerDasboard;
