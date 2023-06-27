import React from 'react';
import avatar from '../images/personal-image.jpg';
import editPen from '../images/avatar-edit-button.svg';
import api from '../utils/api.js';
import Card from './Card.js';

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('Персональная страница');
  const [userDescription, setUserDescription] = React.useState('О себе');
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfoServe()
      .then(user => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch(err => {
        console.log(`Ошибка получения UserInfo: ${err}`);
      });
  });

  React.useEffect(() => {
    api
      .getInitialCards()
      .then(cards => {
        setCards(
          cards.map(data => ({
            likes: data.likes,
            link: data.link,
            name: data.name,
            cardId: data._id
          }))
        );
      })
      .catch(err => {
        console.log(`Ошибка получения массива Cards: ${err}`);
      });
  }, []);

  return (
    <main>
      <section className="profile section">
        <div className="profile__avatar">
          <img src={userAvatar} alt="Фото профиля" className="profile__image user-avatar" />
          <button className="profile__edit-image-button" onClick={onEditAvatar}>
            <img src={editPen} alt="Карандаш Редактировать" className="profile__edit-image" />
            <div className="sr-only">Редактировать</div>
          </button>
        </div>
        <h1 className="profile__name text user-name">{userName}</h1>
        <button
          className="button-edit button-open button profile__edit-button edit-popup-open"
          onClick={onEditProfile}
        >
          <div className="sr-only">Редактировать</div>
        </button>
        <p className="profile__about text user-about">{userDescription}</p>
        <button
          className="button-add button-open button profile__add-button add-card-popup-open"
          onClick={onAddPlace}
        >
          <div className="sr-only">Добавить</div>
        </button>
      </section>
      <section className="photo-galery section" aria-label="Галерея">
        <ul className="elements page__list">
          {cards.map(card => (
            <Card
              key={card.cardId}
              name={card.name}
              link={card.link}
              likes={card.likes}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
