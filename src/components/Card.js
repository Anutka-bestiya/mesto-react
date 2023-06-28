import React from 'react';

function Card({ card, onCardClick }) {
  return (
    <li className="elements__list">
      <figure className="element">
        <button className="button button-card-delete">
          <div className="sr-only">Удалить</div>
        </button>
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={() => {
            onCardClick(card.name, card.link);
          }}
        />
        <figcaption className="element__caption">
          <p className="title element__title">{card.name}</p>
          <div className="element__like">
            <button className="button button-like">
              <div className="sr-only">Поставить лайк</div>
            </button>
            <p className="text element__like-count">{card.likes.length}</p>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}

export default Card;
