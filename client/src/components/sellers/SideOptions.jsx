import React from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Upload } from "../svgs/upload.svg";

const SideOptions = () => {
  return (
    <div className="ml-1">
      <Card>
        <Link
          style={{ color: "#ff006c" }}
          className="container"
          to="/sellerDashBoard/viewOwnStore"
        >
          View Store
        </Link>
      </Card>
      <hr />
      <Card>
        <Link
          style={{ color: "#ff006c" }}
          className="container"
          to="/sellerDashBoard/uploadProduct"
        >
          <Upload /> Upload Item
        </Link>
      </Card>
      <hr />
      <Card>
        <Link
          style={{ color: "#ff006c" }}
          className="container"
          to="/sellerDashBoard/shopdetails"
        >
          Shop And Profile Info
        </Link>
      </Card>
      <hr />
    </div>
  );
};

export default SideOptions;
