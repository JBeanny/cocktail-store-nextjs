import { useState, useEffect } from "react";
import classes from "../styles/Home.module.css";
import Card from "../components/Card/Card";

export default function Home() {
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCocktail = async () => {
    await fetch("https://thecocktaildb.com/api/json/v1/1/search.php?f=b")
      .then((res) => {
        return res.json();
      })
      .then((drinks) => {
        setDrink(drinks.drinks);
      });
    setLoading(false);
  };

  useEffect(() => {
    getCocktail();
  }, []);

  if (loading) return <div className={classes.loading}>Loading...</div>;
  return (
    <>
      <h1 className={classes.title}>Grab Cocktail of Your Choice</h1>
      <div className={classes.container}>
        {drink?.map((drink, index) => {
          return (
            <div key={index}>
              <Card
                id={drink.idDrink}
                src={`${drink.strDrinkThumb}/preview`}
                category={drink.strCategory}
                name={drink.strDrink}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
