import React from "react";

const Page403User = () => {
  return (
    <div
      className="container center"
      style={{
        backgroundColor: "#ff006c",
        color: "black",
        alignContent: "center",
        zIndex: "3",
        minHeight: "200vh",
        minWidth: "100vw"
      }}
    >
      <br></br>
      <br />
      <h1>NOT AUTHORIZED</h1>
      <h1 className="mt-5">Signed In Customers Only!!!.</h1>
      <h6>
        Log in as Customer or Log out of your sellers account
        <br />
        proceed to Customer login.
      </h6>

      <span className="btn btn-info ml-4">
        <a style={{ textDecoration: "none", color: "black" }} href="/signIn">
          Proceed to Customer Login
        </a>
      </span>
    </div>
  );
};

export default Page403User;
