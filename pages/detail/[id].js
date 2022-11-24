import React, { useEffect, useState } from "react";
import classes from "./detail.module.css";
import Image from "next/image";

const Detail = ({ id }) => {
  const [drink, setDrink] = useState({});

  const getDrink = async () => {
    if (!id) return;
    await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((drink) => {
        setDrink(drink.drinks[0]);
      });
  };

  useEffect(() => {
    getDrink();
  }, []);

  if (drink.strDrinkThumb) {
    return (
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <Image
            src={`${drink.strDrinkThumb}`}
            alt="drink"
            style={{ borderRadius: "10px", boxShadow: "5px 5px lightgray" }}
            width={500}
            height={500}
          />
        </div>
        <div className={classes.detail}>
          <div className={classes.name}>{drink.strDrink}</div>
          <div className={classes.category}>{drink.strCategory}</div>
          <div className={classes.instruction}>{drink.strInstructions}</div>
        </div>
      </div>
    );
  }
};

export async function getServerSideProps(context) {
  const id = context && context.query.id;
  return {
    props: {
      id,
    },
  };
}

export default Detail;
