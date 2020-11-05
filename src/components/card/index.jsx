import "./index.css";
import React from "react";

const Card = (props) => (
  <div className="card cardGroup__card">
    <div className="card__description cardGroup__cardDescription">
      <div className={`icon fa fa-${props.icon} card__descriptonIcon`} />
      <div className=".card__descriptionText">
        {props.description}
        {props.tip && (
          <div>
            <br />({props.tip})
          </div>
        )}
      </div>
    </div>
    <div className="card__price">{props.price}</div>
  </div>
);

export default Card;
