import React from "react";
import Link from "next/link";

const NotFound = () => {
  const styles = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <h1 style={{ fontSize: "5em" }}>&#9785;</h1>
      <h3>This page is not found !</h3>
      <h4>
        Go back to{" "}
        <Link href="/" style={{ textDecoration: "underline" }}>
          Home
        </Link>
      </h4>
    </div>
  );
};

export default NotFound;
