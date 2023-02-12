
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
const buttonOpenAvatar = document.querySelector('.profile__avatar-button');
const userAvatar = document.querySelector('.profile__avatar');

export { validationConfig, buttonOpenAddCard, buttonOpenEditProfile, buttonOpenAvatar, userAvatar};
