import React from "react";
import classes from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";

const Card = (props) => {
  const { id, src, category, name } = props;
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src={src}
          width="300"
          height="300"
          alt="Cocktail"
          quality={100}
          style={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
        />
      </div>
      <div className={classes.cocktailContent}>
        <div className={classes.name}>{name}</div>
        <div className={classes.category}>{category}</div>
      </div>
      <div className={classes.action}>
        <div className={classes.btn}>
          <Link href={`/detail/${id}`}>More info</Link>
        </div>
        <div className={classes.counter}>
          <button
            className={classes.actionBtn}
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          {cart.findIndex((val) => val.id === id) != -1 ? (
            <div className={classes.count}>
              {cart[cart.findIndex((val) => val.id === id)].quantity}
            </div>
          ) : (
            0
          )}
          <button
            className={classes.actionBtn}
            onClick={() => addToCart(props)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
