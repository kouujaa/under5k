import React from "react";
import { Card, CardBody, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";

const SideOptions = () => {
  return (
    <div>
      <Card>
        <CardBody></CardBody>
        <CardFooter>
          <Link to="/sellerDashBoard/uploadProduct">Upload To Your Store</Link>
        </CardFooter>
      </Card>
      <hr />
      <Card>
        <CardBody></CardBody>
        <CardFooter>
          <Link to="/sellerDashBoard/shopdetails">Shop And Profile Info</Link>
        </CardFooter>
      </Card>{" "}
      <hr />
      <Card>
        <CardBody></CardBody>
        <CardFooter>
          <Link to="/sellerDashBoard/manageStore">Manage Store</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SideOptions;
