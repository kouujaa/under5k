import React from "react";
import { Button } from "reactstrap";

const Page404 = () => {
  return (
    <div
      style={{
        backgroundColor: "#ff006c",
        color: "black",
        alignContent: "center",
        zIndex: "3",
        minHeight: "100vh",
        minWidth: "100vw"
      }}
    >
      <div className="container">
        <h1>404</h1>
        <h3>
          Oops, the page you're <br />
          looking for does not exist.
        </h3>
        <h6>
          You may want to head back to the homepage.
          <br />
          If you think something is broken, report a problem.
        </h6>
        <div className="mt-4">
          {" "}
          <span className="btn btn-success">
            <a href="/">Go to homepage</a>
          </span>
          <span className="btn btn-success ml-4">
            <a href="/contact">Report a problem</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page404;
