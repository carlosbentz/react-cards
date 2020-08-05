import React from "react";
import CardGroup from "./components/CardGroup";
import Card from "./components/Card";

const infos = [
  { icon: "fa-thumbs-o-up", price: "Free!", description: "Trial" },
  { icon: "fa-trophy", price: "$10.00", description: "Basic tier" },
  { icon: "fa-bolt", price: "$6,000.00", description: "Advanced tier" },
];

const App = () => (
  <CardGroup>
    {infos.map((info) => (
      <Card icon={info.icon} price={info.price}>
        {info.description}
      </Card>
    ))}
    {/* <Card icon="fa-thumbs-o-up" price="Free!">
      Trial
    </Card>
    <Card icon="fa-trophy" price="$10.00">
      {" "}
      Basic tier
      <br />
      (most popular)
    </Card>
    <Card icon="fa-bolt" price="$6,000.00">
      Advanced tier
      <br />
      (only for enterprise-level professionals)
    </Card> */}
  </CardGroup>
);

export default App;
