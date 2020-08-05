import React from "react";
import Icon from "./Icon";
import Description from './Description'
import Price from './Price'

export default function Card(props) {
  const { icon, price } = props;
  return (
    <div className="card cardGroup__card">
      <div className="card__description cardGroup__cardDescription">
        <Icon>{icon}</Icon>
        <Description>{props.children}</Description>
      </div>
      <Price>{price}</Price>
    </div>
  );
}
