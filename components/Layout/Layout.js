import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "5em" }}>{props.children}</div>
    </>
  );
};

export default Layout;
