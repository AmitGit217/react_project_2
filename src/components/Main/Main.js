import React from "react";
import MainCSS from "./Main.module.css";
import Card from "../Card/Card";
import data from "../../Vendor/Data";

export default function Main() {
  const cards = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });

  return <main className={MainCSS.main}>{cards}</main>;
}
