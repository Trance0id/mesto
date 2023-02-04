import '../pages/index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';

import { initialCards, validationConfig, buttonOpenAddCard, buttonOpenEditProfile } from '../utils/constants';

const popupWithImage = new PopupWithImage('.popup_type_zoom');
popupWithImage.setEventListeners();

function createCard(item) {
  const card = new Card(item, '.card-template', () => popupWithImage.open(item.name, item.link));
  const cardElement = card.createCard();
  return cardElement;
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: item => {
      const card = createCard(item);
      cardList.addItem(card);
    }
  },
  '.cards__list');
cardList.renderItems();

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

const formValidators = {}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
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
