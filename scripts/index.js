const popup = document.querySelector('.popup');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonCloseEdit = document.querySelector('.popup__close');
const nameField = document.querySelector('.profile__name');
const aboutField = document.querySelector('.profile__description')
const formEditProfile = popup.querySelector('form[name="editprofile"]');
const nameInput = formEditProfile.querySelector('input[name="name"]');
const aboutInput = formEditProfile.querySelector('input[name="about"]');

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
  newCard.querySelector('.card__caption-title').textContent = card['name'];
  newCard.querySelector('.card__image').setAttribute('src', card['link']);
  return newCard;
}

function renderCards(cards) {
  cards.forEach(card => {
    cardsContainer.prepend(createCard(card));
  });
}

function editProfile() {
  nameInput.value = nameField.textContent;
  aboutInput.value = aboutField.textContent;
  popup.classList.add('popup_opened');
}

function closeEdit() {
  popup.classList.remove('popup_opened');
}

buttonEditProfile.addEventListener('click', editProfile);

buttonCloseEdit.addEventListener('click', closeEdit);

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  nameField.textContent = nameInput.value;
  aboutField.textContent = aboutInput.value;
  closeEdit();
}

formEditProfile.addEventListener('submit', handleEditProfileSubmit);
renderCards(initialCards);
