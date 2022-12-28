const popupProfile = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_add');
const popupZoom = document.querySelector('.popup_type_zoom');

const buttonCloseProfile = popupProfile.querySelector('.popup__close');
const buttonCloseCard = popupCard.querySelector('.popup__close');
const buttonCloseZoom = popupZoom.querySelector('.popup__close');

const buttonOpenEditProfile = document.querySelector('.profile__edit-button');
const buttonOpenAddCard = document.querySelector('.profile__add-button');

const nameField = document.querySelector('.profile__name');
const aboutField = document.querySelector('.profile__description');

const formEditProfile = popupProfile.querySelector('form[name="edit-profile"]');
const formAddCard = popupCard.querySelector('form[name="add-card"]');

const nameInput = formEditProfile.querySelector('input[name="name"]');
const aboutInput = formEditProfile.querySelector('input[name="about"]');

const titleInput = formAddCard.querySelector('input[name="title"]');
const urlInput = formAddCard.querySelector('input[name="url"]');

const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const cardsContainer = document.querySelector('.cards__list');

const popupImg = popupZoom.querySelector('.popup__img');
const popupCaption = popupZoom.querySelector('.popup__caption');

const pictureAltPrefix = 'Фото места под названием '

function likeCard(evt) {
  evt.target.classList.toggle('card__button-like_active');
}

function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closeZoom() {
  buttonCloseZoom.removeEventListener('click', closeZoom);
  closePopup(popupZoom);
}

function openZoom(name, link) {
  popupImg.setAttribute('src', link);
  popupImg.setAttribute('alt', `${pictureAltPrefix}${name}`);
  popupCaption.textContent = name;
  buttonCloseZoom.addEventListener('click', closeZoom);
  openPopup(popupZoom);
}

function addCardEventListeners(card, name, link) {
  const likeButton = card.querySelector('.card__button-like');
  const deleteButton = card.querySelector('.card__button-delete');
  const imgButton = card.querySelector('.card__image');
  likeButton.addEventListener('click', likeCard);
  deleteButton.addEventListener('click', deleteCard);
  imgButton.addEventListener('click', () => openZoom(name, link));
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

function closeEditProfile() {
  closePopup(popupProfile);
  formEditProfile.removeEventListener('submit', handleEditProfileSubmit);
  buttonCloseProfile.removeEventListener('click', closeEditProfile);
}

function openEditProfile() {
  nameInput.value = nameField.textContent;
  aboutInput.value = aboutField.textContent;
  formEditProfile.addEventListener('submit', handleEditProfileSubmit);
  buttonCloseProfile.addEventListener('click', closeEditProfile);
  openPopup(popupProfile);
}

function closeAddCard() {
  closePopup(popupCard);
  formAddCard.removeEventListener('submit', handleAddCardSubmit);
  buttonCloseCard.removeEventListener('click', closeAddCard);
}

function openAddCard() {
  formAddCard.reset();
  formAddCard.addEventListener('submit', handleAddCardSubmit);
  buttonCloseCard.addEventListener('click', closeAddCard);
  openPopup(popupCard);
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  nameField.textContent = nameInput.value;
  aboutField.textContent = aboutInput.value;
  closeEditProfile();
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCard = { name: titleInput.value || "Без названия", link: urlInput.value || "https://imageup.ru/img30/4138533/mepracticumjust-face.jpeg" };
  renderCard(newCard);
  closeAddCard();
}

initialCards.reverse().forEach(renderCard);

buttonOpenEditProfile.addEventListener('click', openEditProfile);
buttonOpenAddCard.addEventListener('click', openAddCard);
