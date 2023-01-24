import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

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
const popupZoomCard = document.querySelector('.popup_type_zoom');

const buttonCloseProfile = popupEditProfile.querySelector('.popup__close');
const buttonCloseCard = popupAddCard.querySelector('.popup__close');
const buttonCloseZoom = popupZoomCard.querySelector('.popup__close');

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

const popupImg = popupZoomCard.querySelector('.popup__img');
const popupCaption = popupZoomCard.querySelector('.popup__caption');

const pictureAltPrefix = 'Фото места под названием ';

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleKeyPress);
  popup.addEventListener('click', handleOverlayClick);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleKeyPress);
  popup.removeEventListener('click', handleOverlayClick);
}

function handleKeyPress(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function handleOverlayClick(evt) {
  const popup = evt.currentTarget;
  if (popup === evt.target) {
    closePopup(popup);
  }
}

function launchZoomCard(name, link) {
  popupImg.setAttribute('src', link);
  popupImg.setAttribute('alt', `${pictureAltPrefix}${name}`);
  popupCaption.textContent = name;
  openPopup(popupZoomCard);
}

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

function renderCard(card) {
  const newCard = new Card(card, '.card-template', launchZoomCard);
  cardsContainer.prepend(newCard.createCard());
}

initialCards.reverse().forEach(renderCard);

buttonOpenEditProfile.addEventListener('click', launchEditProfile);
buttonOpenAddCard.addEventListener('click', launchAddCard);

buttonCloseCard.addEventListener('click', () => closePopup(popupAddCard));
buttonCloseProfile.addEventListener('click', () => closePopup(popupEditProfile));
buttonCloseZoom.addEventListener('click', () => closePopup(popupZoomCard));

formEditProfile.addEventListener('submit', handleEditProfileSubmit);
formAddCard.addEventListener('submit', handleAddCardSubmit);

const editProfileValidation = new FormValidator(validationConfig, formEditProfile);
editProfileValidation.enableValidation();

const addCardValidation = new FormValidator(validationConfig, formAddCard);
addCardValidation.enableValidation();
