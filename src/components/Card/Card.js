import React from "react";
import CardCSS from "./Card.module.css";
import loclogo from "../../images/fill.svg";

export default function Card(props) {
  return (
    <div className={CardCSS.card}>
      <img className={CardCSS.card__image} src={props.imageUrl} alt="place" />
      <div className={CardCSS.cardContent}>
        <div className={CardCSS.cardbrief}>
          <img
            className={CardCSS.cardbrief__logo}
            src={loclogo}
            alt="location logo"
          />
          <h2 className={CardCSS.cardbrief__location}>{props.location}</h2>
          <a className={CardCSS.cardbrief__link} href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className={CardCSS.cardContent__title}>{props.title}</h1>

        <time className={CardCSS.cardContent__date}>{props.startDate} -</time>
        <time className={CardCSS.cardContent__date}> {props.endDate}</time>
        <p className={CardCSS.cardContent__description}>{props.description}</p>
      </div>
    </div>
  );
}
