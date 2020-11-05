import Card from "../card/";
import React from "react";
import "./index.css";

const CardGroup = (props) => (
  <div className="cardGroup">
    <Card
      icon="trophy"
      description="Essa aqui é a descrição."
      tip="Isso aqui é uma dica ! "
      price="500R$"
    />
    <Card
      icon="thumbs-o-up"
      description="Essa aqui é a descrição."
      tip="Isso aqui é uma dica ! "
      price="230R$"
    />
    <Card
      icon="bolt"
      description="Essa aqui é a descrição."
      tip="Isso aqui é uma dica ! "
      price="0R$"
    />
  </div>
);

export default CardGroup;
