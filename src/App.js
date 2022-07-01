import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import katie from "./images/Katie-Zaferes.jpg";
import data from "./data";
import "./App.css";

function App() {
  const cardData = data.map((d) => {
    return (
      <Card
        key={d.id}
        img="Katie-Zaferes.jpg"
        rating={d.stats.rating}
        reviewCount={d.stats.reviewCount}
        country="Togo"
        title={d.title}
        price={d.price}
      />
    );
  });

  console.log(cardData);

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards--section">{cardData}</section>
    </div>
  );
}

export default App;
