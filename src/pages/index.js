import '../pages/index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import { validationConfig,
  apiConfig,
  buttonOpenAddCard,
  buttonOpenEditProfile,
  buttonOpenAvatar
} from '../utils/constants.js';

function createCard(item) {
  const card = new Card(
    item,
    '.card-template',
    () => popupWithImage.open(item.name, item.link),
    () => popupDeleteCard.open(),
    (cardOwnerId) => cardOwnerId === userInfo.getUserId()
  );
  return card.createCard();
}

const api = new Api(apiConfig);

api.getUserInfo()
  .then(res => {
    userInfo.setUserInfo({name: res.name, about: res.about});
    userInfo.setUserAvatar(res.avatar);
    userInfo.setUserId(res._id);
  })
  .catch(err => {
    console.log('Ошибка!!! Статус: ', err);
  });

const cardList = new Section(
  {
    renderer: item => {
      cardList.addItem(createCard(item));
    }
  },
  '.cards__list');

api.getInitialCards()
  .then(items => {
    cardList.renderItems(items);
  })
  .catch(err => {
    console.log('Ошибка!!! ', err);
  });

const popupWithImage = new PopupWithImage('.popup_type_zoom');
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm(
  '.popup_type_add',
  inputvalues => {
    api.addNewCard(inputvalues)
      .then(res => {
        const card = createCard(res);
        cardList.addItem(card);
      })
      .catch(err => {
        console.log('Ошибка!!! Статус: ', err);
      });
    popupAddCard.close();
  },
  () => formValidators['add-card'].resetValidation()
);
popupAddCard.setEventListeners();

const userInfo = new UserInfo({ nameSelector: '.profile__name', aboutSelector: '.profile__description', avatarSelector: '.profile__avatar' });

const popupEditProfile = new PopupWithForm(
  '.popup_type_edit',
  inputvalues => {
    api.updateUserInfo(inputvalues)
      .then(res => { userInfo.setUserInfo(res); })
      .catch(err => {
        console.log('Ошибка!!! Статус: ', err);
      });
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
