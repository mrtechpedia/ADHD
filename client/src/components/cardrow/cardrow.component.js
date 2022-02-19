import React from "react";
import cardData from "../../data/cardData";
import Cards from "../cards/cards.component";
import "./cardrow.styles.css";

function CardRow({ email }) {
  return (
    <div className="row">
      {cardData.map((card) => {
        return (
          <div className="cards">
            <Cards
              email={email}
              icon={card.icon}
              heading={card.heading}
              content={card.content}
              button={card.button}
              color={card.color}
              type={card.type}
            ></Cards>
          </div>
        );
      })}
    </div>
  );
}

export default CardRow;
