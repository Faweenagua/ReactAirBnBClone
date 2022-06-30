import React from "react";
import katie from "../images/Katie-Zaferes.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  return (
    <section className="cards--section">
      <div className="card">
        <h5 className="card--status">SOLD OUT</h5>
        <img src={katie} alt="katie zaferes" className="card--photo" />
        <h5 className="card--rating">
          <span className="card--rating_star">&#9733;</span>
          <span className="card--rating_value"> 5.0 </span>
          <span>(6) &#8226;</span>
          <span> USA</span>
        </h5>
        <p className="card--text">Life lessons with Katie Zaferes</p>
        <h4 className="card--price">
          <span className="card--price__price">From $136</span> / person
        </h4>
      </div>
    </section>
  );
}
