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

const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');

const buttonOpenEditProfile = document.querySelector('.profile__edit-button');
const buttonOpenAddCard = document.querySelector('.profile__add-button');

const nameField = document.querySelector('.profile__name');
const aboutField = document.querySelector('.profile__description');

const formEditProfile = popupEditProfile.querySelector('form[name="edit-profile"]');
const formAddCard = popupAddCard.querySelector('form[name="add-card"]');

const nameInput = formEditProfile.querySelector('input[name="name"]');
const aboutInput = formEditProfile.querySelector('input[name="about"]');

const titleInput = formAddCard.querySelector('input[name="title"]');
const urlInput = formAddCard.querySelector('input[name="url"]');

const cardsContainer = document.querySelector('.cards__list');


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



function launchEditProfile() {
  nameInput.value = nameField.textContent;
  aboutInput.value = aboutField.textContent;
  editProfileValidation.resetValidation();
  openPopup(popupEditProfile);
}

function launchAddCard() {
  formAddCard.reset();
  addCardValidation.resetValidation();
  openPopup(popupAddCard);
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  nameField.textContent = nameInput.value;
  aboutField.textContent = aboutInput.value;
  closePopup(popupEditProfile);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCard = { name: titleInput.value, link: urlInput.value };
  renderCard(newCard);
  closePopup(popupAddCard);
}

buttonOpenEditProfile.addEventListener('click', launchEditProfile);
buttonOpenAddCard.addEventListener('click', launchAddCard);

// formEditProfile.addEventListener('submit', handleEditProfileSubmit);
// formAddCard.addEventListener('submit', handleAddCardSubmit);

const editProfileValidation = new FormValidator(validationConfig, formEditProfile);
editProfileValidation.enableValidation();

const addCardValidation = new FormValidator(validationConfig, formAddCard);
addCardValidation.enableValidation();
