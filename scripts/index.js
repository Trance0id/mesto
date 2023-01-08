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

const cardTemplate = document.querySelector('.card-template').content;
const cardsContainer = document.querySelector('.cards__list');

const popupImg = popupZoomCard.querySelector('.popup__img');
const popupCaption = popupZoomCard.querySelector('.popup__caption');

const pictureAltPrefix = 'Фото места под названием ';

function likeCard(evt) {
  evt.target.classList.toggle('card__button-like_active');
}

function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

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
  if(popup === evt.target) {
    closePopup(popup);
  }
}

function launchZoomCard(name, link) {
  popupImg.setAttribute('src', link);
  popupImg.setAttribute('alt', `${pictureAltPrefix}${name}`);
  popupCaption.textContent = name;
  openPopup(popupZoomCard);
}

function addCardEventListeners(card, name, link) {
  const likeButton = card.querySelector('.card__button-like');
  const deleteButton = card.querySelector('.card__button-delete');
  const imgButton = card.querySelector('.card__image');
  likeButton.addEventListener('click', likeCard);
  deleteButton.addEventListener('click', deleteCard);
  imgButton.addEventListener('click', () => launchZoomCard(name, link));
}

function createCard(name, link) {
  const newCard = cardTemplate.cloneNode(true);
  const newCardImg = newCard.querySelector('.card__image');
  newCard.querySelector('.card__caption-title').textContent = name;
  newCardImg.setAttribute('src', link);
  newCardImg.setAttribute('alt', `${pictureAltPrefix}${name}`);
  addCardEventListeners(newCard, name, link);
  return newCard;
}

function renderCard(card) {
  cardsContainer.prepend(createCard(card.name, card.link));
}

function launchEditProfile() {
  nameInput.value = nameField.textContent;
  aboutInput.value = aboutField.textContent;
  removeValidationErrors(formEditProfile, validationConfig);
  openPopup(popupEditProfile);
}

function launchAddCard() {
  formAddCard.reset();
  removeValidationErrors(formAddCard, validationConfig);
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

initialCards.reverse().forEach(renderCard);

buttonOpenEditProfile.addEventListener('click', launchEditProfile);
buttonOpenAddCard.addEventListener('click', launchAddCard);

buttonCloseCard.addEventListener('click', () => closePopup(popupAddCard));
buttonCloseProfile.addEventListener('click', () => closePopup(popupEditProfile));
buttonCloseZoom.addEventListener('click', () => closePopup(popupZoomCard));

formEditProfile.addEventListener('submit', handleEditProfileSubmit);
formAddCard.addEventListener('submit', handleAddCardSubmit);
