import React from "react";
import Card from "./Card";

const CardList = ({ puppies, imgp, cardS }) => {
  return (
    <div className="flex flex-wrap justify-between mw8">
      {puppies.map((v, i) => {
        return (
          <Card
            key={i}
            email={puppies[i].email}
            name={puppies[i].name}
            imgp={imgp}
            img={`/img/${i}.jpg`}
            cardS={cardS}
          />
        );
      })}
    </div>
  );
};

export default CardList;
