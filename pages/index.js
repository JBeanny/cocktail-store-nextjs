import classes from "../styles/Home.module.css";
import Card from "../components/Card/Card";
import { useContext, useState } from "react";
import CartContext from "../Context/CartContext";

function Home({ drinks }) {
  const [searchTerm, setSearchTerm] = useState("");
  const items = useContext(CartContext);
  items.drinks = drinks;

  return (
    <>
      <div className="mt-8 mx-auto w-10/12 flex justify-start items-center">
        <input
          placeholder="Search . . ."
          className="p-2 rounded-md w-1/3"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        ></input>
      </div>
      <h1 className={classes.title}>🔥 Trendings</h1>
      <div className={classes.container}>
        {items.drinks
          .filter((val) => {
            if (searchTerm === "") return val;
            else if (
              val.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
            )
              return val;
          })
          .map((drink, index) => {
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
