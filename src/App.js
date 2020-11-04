import React from "react";

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = (props) => <div className="cardGroup">{props.children}</div>;

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

const App = () => (
  <CardGroup className="cardGroup">
    {
      <Card
        icon="trophy"
        description="Esse aqui é um exemplo"
        tip="Essa é uma dica"
        price="500R$"
      />
    }
  </CardGroup>
);

export default App;

/* <div className="card cardGroup__card">
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
        </div> */
