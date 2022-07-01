import React from "react";
// import katie from "../images/Katie-Zaferes.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  const img = "../images/" + props.img;
  return (
    <div className="card">
      <h5 className="card--status">SOLD OUT</h5>
      <img
        src={require(`../images/${props.img}`)}
        // src={props.img}
        alt="katie zaferes"
        className="card--photo"
      />
      <h5 className="card--rating">
        <span className="card--rating_star">&#9733;</span>
        <span className="card--rating_value"> {props.rating} </span>
        <span>({props.reviewCount}) •</span>
        <span> {props.country}</span>
      </h5>
      <p className="card--text">{props.title}</p>
      <h4 className="card--price">
        <span className="card--price__price">From ${props.price}</span> / person
      </h4>
    </div>
  );
}
