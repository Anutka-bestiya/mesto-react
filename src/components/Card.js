import React from 'react';

function Card({ key, name, link, likes, onCardClick }) {
  return (
    <li className="elements__list">
      <figure className="element">
        <button className="button button-card-delete">
          <div className="sr-only">Удалить</div>
        </button>
        <img
          className="element__image"
          src={link}
          alt={name}
          onClick={() => {
            onCardClick(name, link);
          }}
        />
        <figcaption className="element__caption">
          <p className="title element__title">{name}</p>
          <div className="element__like">
            <button className="button button-like">
              <div className="sr-only">Поставить лайк</div>
            </button>
            <p className="text element__like-count">{likes.length}</p>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}

export default Card;
