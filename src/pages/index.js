import '../pages/index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const buttonOpenEditProfile = document.querySelector('.profile__edit-button');
const buttonOpenAddCard = document.querySelector('.profile__add-button');

const cardList = new Section(
  {
    items: initialCards,
    renderer: item => {
      const card = new Card(item,
        '.card-template',
        (name, link) => {
          const popupWithImage = new PopupWithImage('.popup_type_zoom');
          popupWithImage.open(name, link);
          popupWithImage.setEventListeners();
        });
      cardList.addItem(card.createCard());
    }
  },
  '.cards__list');
cardList.renderItems();

const popupAddCard = new PopupWithForm(
  '.popup_type_add',
  inputvalues => {
    const card = new Card(inputvalues,
      '.card-template',
      (name, link) => {
        const popupWithImage = new PopupWithImage('.popup_type_zoom');
        popupWithImage.open(name, link);
        popupWithImage.setEventListeners();
      });
    cardList.addItem(card.createCard());
    popupAddCard.close();
  },
  () => addCardValidation.resetValidation()
);
popupAddCard.setEventListeners();

const addCardValidation = new FormValidator(validationConfig, popupAddCard.getForm());
addCardValidation.enableValidation();

const userInfo = new UserInfo({ nameSelector: '.profile__name', aboutSelector: '.profile__description' });

const popupEditProfile = new PopupWithForm(
  '.popup_type_edit',
  inputvalues => {
    userInfo.setUserInfo(inputvalues);
    popupEditProfile.close();
  },
  () => editProfileValidation.resetValidation()
);
popupEditProfile.setEventListeners();

const editProfileValidation = new FormValidator(validationConfig, popupEditProfile.getForm());
editProfileValidation.enableValidation();

buttonOpenEditProfile.addEventListener('click', () => {
  popupEditProfile.fillInputs(userInfo.getUserInfo());
  popupEditProfile.open();
});

buttonOpenAddCard.addEventListener('click', () => popupAddCard.open());
