import React, { useContext } from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";
import Image from "next/image";
import CartContext from "../../Context/CartContext";
import { useRouter } from "next/router";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  const context = useContext(CartContext);
  let itemInCart = 0;
  context.cart.forEach((val) => (itemInCart += val.quantity));

  const router = useRouter();

  return (
    <div className={classes.container}>
      <Image
        src="/logo.webp"
        className={classes.logo}
        width={80}
        height={80}
        alt="Logo"
        style={{ borderRadius: "50%" }}
      />
      <div>
        <Link
          href="/"
          className={
            router.pathname === "/" ? classes.activeLink : classes.link
          }
        >
          Cocktails
        </Link>
        <Link
          href="/cart"
          className={
            router.pathname === "/cart" ? classes.activeLink : classes.link
          }
        >
          Cart
        </Link>
        <Link
          href="/about"
          className={
            router.pathname === "/about" ? classes.activeLink : classes.link
          }
        >
          About
        </Link>
        <Link
          href="/contact"
          className={
            router.pathname === "/contact" ? classes.activeLink : classes.link
          }
        >
          Contact
        </Link>
        <Link href="/sign-up" className="text-2xl text-white">
          <BiLogIn />
        </Link>
      </div>
      <h5 className="absolute right-72 max-sm:right-36 max-sm:-z-10 top-4 max-sm:top-4 bg-lightred text-white px-2 max-sm:px-2 max-sm:py-1/2 rounded-full cursor-pointer">
        <Link href="/cart">{itemInCart}</Link>
      </h5>
    </div>
  );
};

export default Navbar;
