import classes from "../styles/Home.module.css";
import Card from "../components/Card/Card";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

function Home({ drinks }) {
  const items = useContext(CartContext);
  items.drinks = drinks;
  return (
    <>
      <h1 className={classes.title}>Grab Cocktail of Your Choice</h1>
      <div className={classes.container}>
        {items.drinks?.map((drink, index) => {
          return (
            <div key={index}>
              <Card
                id={drink.idDrink}
                src={`${drink.strDrinkThumb}`}
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

export async function getStaticProps() {
  const drinks = await fetch(
    "https://thecocktaildb.com/api/json/v1/1/search.php?f=b"
  )
    .then((res) => res.json())
    .then((drinks) => {
      return drinks.drinks;
    });

  return {
    props: {
      drinks,
    },
  };
}

export default Home;
