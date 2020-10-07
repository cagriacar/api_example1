import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.download_url}>
          <figure
            className="cards__item__pic-wrap"
            data-category={props.author}
          >
            <img
              className="cards__item__img"
              src={props.download_url}
              alt={props.author}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.author}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
