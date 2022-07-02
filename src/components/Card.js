import React from "react";
// import katie from "../images/Katie-Zaferes.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <h5 className="card--status">{badgeText}</h5>}
      <img
        src={require(`../images/${props.data.coverImg}`)}
        // src={props.data.img}
        alt="katie zaferes"
        className="card--photo"
      />
      <h5 className="card--rating">
        <span className="card--rating_star">&#9733;</span>
        <span className="card--rating_value"> {props.data.stats.rating} </span>
        <span>({props.data.stats.reviewCount}) •</span>
        <span> {props.data.location}</span>
      </h5>
      <p className="card--text">{props.data.title}</p>
      <h4 className="card--price">
        <span className="card--price__price">From ${props.data.price}</span> /
        person
      </h4>
    </div>
  );
}
