import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, isSelectedCard] = React.useState(null);

  function handleCardClick(name, link) {
    isSelectedCard({ name, link });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    isSelectedCard(null);
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfile={setIsEditProfilePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        // ...props
      >
        <input
          className="popup__input form__input text text_size_small form-user-name"
          type="text"
          name="name"
          value=""
          required
          minlength="2"
          maxlength="40"
          placeholder="Имя"
        />
        <span className="popup__error popup__error-name"></span>
        <input
          className="popup__input form__input text text_size_small form-user-about"
          type="text"
          name="about"
          value=""
          required
          minlength="2"
          maxlength="200"
          placeholder="О себе"
        />
        <span className="popup__error popup__error-about"></span>
      </PopupWithForm>
      <PopupWithForm
        name="avatar-edit"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        // ...props
      >
        <input
          className="popup__input form__input text text_size_small form-avatar__input"
          type="url"
          name="avatar"
          value=""
          required
          placeholder="https://site.com"
        />
        <span className="popup__error popup__error-avatar"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        // ...props
      >
        <input
          className="popup__input form__input text text_size_small add-card__text form-add-card-name"
          type="text"
          name="name"
          value=""
          required
          minlength="2"
          maxlength="30"
          placeholder="Название"
        />
        <span className="popup__error popup__error-name"></span>
        <input
          className="popup__input form__input text text_size_small add-card__text form-add-card-link"
          type="url"
          name="link"
          value=""
          required
          placeholder="https://site.com"
        />
        <span className="popup__error popup__error-link"></span>
      </PopupWithForm>
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
        // isOpen={}
        onClose={closeAllPopups}
        // ...props
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
