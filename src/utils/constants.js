
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60/',
  headers: {
    authorization: 'fac9339f-e6fd-4202-9057-cf36536b9501'
  }
};

const buttonOpenEditProfile = document.querySelector('.profile__edit-button');
const buttonOpenAddCard = document.querySelector('.profile__add-button');
const buttonOpenAvatar = document.querySelector('.profile__avatar-button');

export { validationConfig, apiConfig, buttonOpenAddCard, buttonOpenEditProfile, buttonOpenAvatar };
