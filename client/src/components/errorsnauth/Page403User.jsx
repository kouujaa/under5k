import React from "react";

const Page403User = () => {
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
      <h1>403 FORBIDDEN</h1>
      <h3>
        access not authorized
        <br />
        Buying Customers only.
      </h3>
      <h6>
        Log in as Customer or Log out of your sellers account
        <br />
        proceed to Customer login.
      </h6>
      <a href="/signIn">Proceed to Customer Login</a>
    </div>
  );
};

export default Page403User;
