import React from "react";
import { Link } from "react-router-dom";

const ManageStore = props => {
  return (
    <div>
      <Link>Re-Stock</Link>
      <br />
      <Link>Pull product</Link>
      <br />
      <Link>Edit product</Link>
      <br />
      <Link>Apply Discount/Promotion</Link>
    </div>
  );
};

export default ManageStore;
