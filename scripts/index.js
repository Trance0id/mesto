const popupProfile = document.querySelector('.popup-edit-profile');
const popupCard = document.querySelector('.popup-add-card');

const buttonOpenEditProfile = document.querySelector('.profile__edit-button');
const buttonCloseEditProfile = popupProfile.querySelector('.popup__close');

const buttonOpenAddCard = document.querySelector('.profile__add-button');
const buttonCloseAddCard = popupCard.querySelector('.popup__close');

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

function createCard(card) {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.card__caption-title').textContent = card.name;
  newCard.querySelector('.card__image').setAttribute('src', card.link);
  newCard.querySelector('.card__image').setAttribute('alt', `Фото места под названием ${card.name}`);
  return newCard;
}

function renderCard(card) {
  cardsContainer.prepend(createCard(card));
}

function openEditProfile() {
  nameInput.value = nameField.textContent;
  aboutInput.value = aboutField.textContent;
  buttonCloseEditProfile.addEventListener('click', closeEditProfile);
  formEditProfile.addEventListener('submit', handleEditProfileSubmit);
  popupProfile.classList.add('popup_opened');
}

function closeEditProfile() {
  popupProfile.classList.remove('popup_opened');
  formEditProfile.removeEventListener('submit', handleEditProfileSubmit);
  buttonCloseEditProfile.removeEventListener('click', closeEditProfile);
}

function openAddCard() {
  titleInput.value = '';
  urlInput.value = '';
  formAddCard.addEventListener('submit', handleAddCardSubmit);
  buttonCloseAddCard.addEventListener('click', closeAddCard);
  popupCard.classList.add('popup_opened');
}

function closeAddCard() {
  popupCard.classList.remove('popup_opened');
  formAddCard.removeEventListener('submit', handleAddCardSubmit);
  buttonCloseAddCard.removeEventListener('click', closeEditProfile);
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

buttonOpenEditProfile.addEventListener('click', openEditProfile);
buttonOpenAddCard.addEventListener('click', openAddCard);

initialCards.forEach(renderCard);
