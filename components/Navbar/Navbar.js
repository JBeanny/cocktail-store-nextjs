import React from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={classes.container}>
      {/* <div className={classes.logo}>Cocktailer</div>
       */}
      <Image
        src="/logo.webp"
        className={classes.logo}
        width={80}
        height={80}
        alt="Logo"
        style={{ borderRadius: "50%" }}
      />
      <div>
        <Link href="/" className={classes.link}>
          Cocktails
        </Link>
        <Link href="/about" className={classes.link}>
          About
        </Link>
        <Link href="/contact" className={classes.link}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
