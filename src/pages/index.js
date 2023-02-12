import '../pages/index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import api from '../components/Api.js';

import { validationConfig, buttonOpenAddCard, buttonOpenEditProfile, buttonOpenAvatar, userAvatar } from '../utils/constants.js';

function createCard(item) {
  const card = new Card(item, '.card-template', () => popupWithImage.open(item.name, item.image), () => popupDeleteCard.open());
  const cardElement = card.createCard();
  return cardElement;
}

const popupWithImage = new PopupWithImage('.popup_type_zoom');
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm(
  '.popup_type_add',
  inputvalues => {
    const card = createCard(inputvalues);
    cardList.addItem(card);
    popupAddCard.close();
  },
  () => formValidators['add-card'].resetValidation()
);
popupAddCard.setEventListeners();

const userInfo = new UserInfo({ nameSelector: '.profile__name', aboutSelector: '.profile__description' });

const popupEditProfile = new PopupWithForm(
  '.popup_type_edit',
  inputvalues => {
    userInfo.setUserInfo(inputvalues);
    popupEditProfile.close();
  },
  () => formValidators['edit-profile'].resetValidation()
);
popupEditProfile.setEventListeners();

const popupChangeAvatar = new PopupWithForm(
  '.popup_type_avatar',
  () => {  },
  () => formValidators['change-avatar'].resetValidation()
);
popupChangeAvatar.setEventListeners();

const popupDeleteCard = new PopupWithForm(
  '.popup_type_delete',
  () => {  },
  () => formValidators['delete-card'].resetValidation()
);
popupDeleteCard.setEventListeners();


const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(validationConfig);



buttonOpenEditProfile.addEventListener('click', () => {
  popupEditProfile.fillInputs(userInfo.getUserInfo());
  popupEditProfile.open();
});
buttonOpenAddCard.addEventListener('click', () => popupAddCard.open());
buttonOpenAvatar.addEventListener('click', () => popupChangeAvatar.open());

api.getUserInfo()
  .then(res => {
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  })
  .then(res => {
    userInfo.setUserInfo({name: res.name, about: res.location.name});
    userAvatar.src = res.image;
  })
  .catch(err => {
    console.dir('Ошибка!!! Статус: ', err);
  });



api.getInitialCards()
  .then(res => {
    if(res.ok) {
      return res.json();
      // console.log(res.body);
    } else {
      return Promise.reject(res.status);
    }
  })
  .then(cards => {
    const cardList = new Section(
      {
        items: cards,
        renderer: item => {
          const card = createCard(item);
          cardList.addItem(card);
        }
      },
      '.cards__list');
    cardList.renderItems();
  })
  .catch(err => {
    console.dir('Ошибка!!! Статус: ', err);
  });
