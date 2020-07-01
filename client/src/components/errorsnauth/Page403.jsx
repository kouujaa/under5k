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
      <h1>403 FORBIDDEN</h1>
      <h3>
        access not authorized
        <br />
        staff and sellers only.
      </h3>
      <h6>
        Log in as seller or Log out of of your customer account
        <br />
        proceed to seller login.
      </h6>
      <a href="/">Back to homepage</a>
    </div>
  );
};

export default Page403;
