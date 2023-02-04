export default class Card {

  _name;
  _link;
  _templateSelector;
  _newCard;
  _likeButton;
  _imageAltPrefix;
  _launchZoomCard;

  constructor({ name, link }, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  };

  _getTemplate() {
    return document.querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

  _customizeCard() {
    const newCardImg = this._newCard.querySelector('.card__image');
    this._newCard.querySelector('.card__caption-title').textContent = this._name;
    newCardImg.setAttribute('src', this._link);
    const imageAltPrefix = 'Фото места под названием';
    newCardImg.setAttribute('alt', `${imageAltPrefix} ${this._name}`);
  }

  _likeCard() {
    this._likeButton.classList.toggle('card__button-like_active');
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _addEventListeners() {
    this._likeButton = this._newCard.querySelector('.card__button-like');
    const deleteButton = this._newCard.querySelector('.card__button-delete');
    const imgButton = this._newCard.querySelector('.card__image');

    this._likeButton.addEventListener('click', () => this._likeCard());
    deleteButton.addEventListener('click', () => this._deleteCard());
    imgButton.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  createCard() {
    this._newCard = this._getTemplate();
    this._customizeCard();
    this._addEventListeners();
    return this._newCard;
  }
}
