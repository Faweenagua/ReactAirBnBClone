import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import katie from "./images/Katie-Zaferes.jpg";
import data from "./data";
import "./App.css";

function App() {
  const cardData = data.map((data) => {
    return <Card key={data.id} data={data} />;
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
