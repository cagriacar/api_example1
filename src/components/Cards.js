import React, { useEffect, useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
/* API üzerinden getData */
const API = "https://picsum.photos/v2/list?page=1&limit=10";

function Cards() {
  const [resimler, setRes] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRes(data);
      });
  }, []);

  return (
    <div className="cards">
      <h1>Resimler</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {resimler.map((item) => (
              <CardItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
