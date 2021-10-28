import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="src/components/PICS/Autumn trees.jpg"
              text="Explore the top visiting place in Indian Jungles"
              label="Jungles"
              path="/sign-up"
            />
            <CardItem
              src="src/components/PICS/sunflower.jpg"
              text="Beautiful Sunflower park with colorful flowers"
              label="Flowers"
              path="/products"
            />
            <CardItem
              src="src/components/PICS/amazing-animal.jpg"
              text="Top visiting place in big Zoo"
              label="Jungles"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
