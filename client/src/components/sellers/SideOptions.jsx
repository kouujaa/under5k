import React from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Upload } from "../svgs/upload.svg";
import { motion } from "framer-motion";

const SideOptions = () => {
  return (
    <motion.div
      className="ml-1"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <Card>
        <Link
          style={{ color: "#ff006c" }}
          className="container"
          to="/sellerDashBoard/viewOwnStore"
        >
          View Available Items
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
      <Card>
        <Link
          style={{ color: "#ff006c" }}
          className="container"
          to="/sellerDashBoard/viewSoldStore"
        >
          View Sold Items
        </Link>
      </Card>
      <hr />
    </motion.div>
  );
};

export default SideOptions;
