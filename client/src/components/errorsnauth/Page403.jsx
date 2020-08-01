import React from "react";

const Page403 = () => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#ff006c",
        color: "black",
        alignContent: "center",
        zIndex: "3",
        minHeight: "200vh",
        minWidth: "100vw"
      }}
    >
      <h1>Access not authorized</h1>
      <h3>
        <br />
        Staff And sellers Only!!!.
      </h3>
      <h6>
        Log in as seller or Log out of of your customer account
        <br />
        proceed to seller login.
      </h6>
      <span className="btn btn-info ml-4">
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="/sellerSignIn"
        >
          Proceed to Seller Login
        </a>
      </span>
    </div>
  );
};

export default Page403;
