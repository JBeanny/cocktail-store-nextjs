import React from "react";
import Card from "../Card/Card";
import classes from "./Popular.module.css";

const Popular = (props) => {
  const { src } = props;
  return (
    <div className={classes.container}>
      <div className={classes.title}>Popular</div>
      <div className={classes.cocktails}>
        <Card />
      </div>
    </div>
  );
};

export default Popular;
