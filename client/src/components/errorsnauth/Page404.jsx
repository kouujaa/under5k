import React from "react";

const Page404 = () => {
  return (
    <div
      className="container center"
      style={{
        backgroundColor: "#ff006c",
        color: "black",
        alignContent: "center",
        zIndex: "3",
        minHeight: "100vh",
        minWidth: "100vw"
      }}
    >
      <div>
        <br></br>
        <br></br>
        <h1>
          Oops, the page you're <br />
          looking for does not exist.
        </h1>
        <h4>
          You may want to head back to the homepage.
          <br />
          If you think something is broken, report a problem.
        </h4>
        <div className="mt-4">
          <span className="btn btn-info">
            <a style={{ textDecoration: "none", color: "black" }} href="/">
              Go to homepage
            </a>
          </span>
          <span className="btn btn-info ml-4">
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="/contact"
            >
              Report a problem
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page404;
