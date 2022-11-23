import React from "react";
import classes from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  const { id, src, category, name } = props;

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src={src}
          width="300"
          height="300"
          alt="Cocktail"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className={classes.cocktailContent}>
        <div className={classes.name}>{name}</div>
        <div className={classes.category}>{category}</div>
      </div>
      <div className={classes.btn}>
        <Link href={`/detail/${id}`}>More info</Link>
      </div>
    </div>
  );
};

export default Card;
