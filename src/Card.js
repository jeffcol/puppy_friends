import React from "react";
import CardCss from './Card.css'

const Card = ({ name, email, imgp, img, cardS }) => {



  return (
    <div className="bg-green dib br3 ma2 pa3 grow w-auto " id="Card">
      <img src={img} alt={imgp} className={cardS} />
      <div>
        <h2 className="f6">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
