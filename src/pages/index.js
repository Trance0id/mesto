import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import {
  validationConfig,
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
    (card, cardId) => popupDeleteCard.open(card, cardId),
    () => item.owner._id === userInfo.getUserId(),
    (card) => {
      if (card.getLikedList().some(user => user._id === userInfo.getUserId())) {
        api.unlikeCard(item._id)
          .then(res => {
            updateLikes(card, res.likes, false)
          })
          .catch(err => {
            console.log('Ошибка!!! Статус: ', err);
          })
      } else {
        api.likeCard(item._id)
          .then(res => {
            updateLikes(card, res.likes, true)
          })
          .catch(err => {
            console.log('Ошибка!!! Статус: ', err);
          })
      }
    },
    (likedList) => likedList.some(user => user._id === userInfo.getUserId())
  );
  return card.createCard();
}

function updateLikes(card, likedList, isLiked) {
  card.setLikedList(likedList);
  card.setLike(isLiked);
}

const api = new Api(apiConfig);

const popupDeleteCard = new PopupWithConfirm(
  '.popup_type_delete',
  (card, cardId) => {
    api.deleteCard(cardId)
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        card.remove();
        card = null;
        popupDeleteCard.close();
      });
  }
);
popupDeleteCard.setEventListeners();

api.getUserInfo()
  .then(res => {
    userInfo.setUserInfo({ name: res.name, about: res.about });
    userInfo.setUserAvatar(res.avatar);
    userInfo.setUserId(res._id);
  })
  .catch(err => {
    console.log(err);
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
    console.log(err);
  });

const popupWithImage = new PopupWithImage('.popup_type_zoom');
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm(
  '.popup_type_add',
  (inputValues, submitButton) => {
    const submitButtonText = submitButton.textContent;
    submitButton.textContent = 'Сохранение...'
    api.addNewCard(inputValues)
      .then(res => {
        const card = createCard(res);
        cardList.addItem(card);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        submitButton.textContent = submitButtonText;
        popupAddCard.close();
      });
  },
  () => formValidators['add-card'].resetValidation()
);
popupAddCard.setEventListeners();

const userInfo = new UserInfo({ nameSelector: '.profile__name', aboutSelector: '.profile__description', avatarSelector: '.profile__avatar' });

const popupEditProfile = new PopupWithForm(
  '.popup_type_edit',
  (inputvalues, submitButton) => {
    submitButton.classList.add('popup__button_loading');
    const submitButtonText = submitButton.textContent;
    submitButton.textContent = 'Сохранение...'
    api.updateUserInfo(inputvalues)
      .then(res => { userInfo.setUserInfo(res) })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        submitButton.textContent = submitButtonText;
        popupEditProfile.close();
      });

  },
  () => formValidators['edit-profile'].resetValidation()
);
popupEditProfile.setEventListeners();

const popupChangeAvatar = new PopupWithForm(
  '.popup_type_avatar',
  (inputValue, submitButton) => {
    const submitButtonText = submitButton.textContent;
    submitButton.textContent = 'Сохранение...'
    api.changeAvatar(inputValue)
      .then(res => {
        userInfo.setUserAvatar(res.avatar)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        submitButton.textContent = submitButtonText;
        popupChangeAvatar.close();
      });
  },
  () => formValidators['change-avatar'].resetValidation()
);
popupChangeAvatar.setEventListeners();

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
