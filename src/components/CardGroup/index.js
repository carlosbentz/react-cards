import React from "react";

export default function CardGroup(props) {
  return (
    <div className="cardGroup">
        {props.children}
      {/* <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
          <div className="icon fa fa-thumbs-o-up card__descriptionIcon" />
          <div className="card__descriptionText">Trial</div>
        </div>
        <div className="card__price">Free!</div>
      </div>
      <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
          <div className="icon fa fa-trophy card__descriptionIcon" />
          <div className="card__descriptionText">
            Basic tier
            <br />
            (most popular)
          </div>
        </div>
        <div className="card__price">$10.00</div>
      </div>
      <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
          <div className="icon fa fa-bolt card__descriptionIcon" />
          <div className="card__descriptionText">
            Advanced tier
            <br />
            (only for enterprise-level professionals)
          </div>
        </div>
        <div className="card__price">$6,000.00</div>
      </div> */}
    </div>
  );
}
