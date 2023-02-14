export default class Card {

  _name;
  _link;
  _templateSelector;
  _newCard;
  _likeButton;
  _deleteButton;
  _imgButton;
  _launchZoomCard;
  _numLikes;
  _ownerId;

  constructor({ name, link, likes, owner }, templateSelector, handleCardClick, handleDeleteClick, checkCardOwnership) {
    this._name = name;
    this._link = link;
    this._numLikes = likes.length;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._ownerId = owner._id;
    this._checkCardOwnership = checkCardOwnership;
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
    this._newCard.querySelector('.card__likes-number').textContent = this._numLikes;
    const deleteButton = this._newCard.querySelector('.card__button-delete');
    if(this._checkCardOwnership(this._ownerId)) {
      deleteButton.classList.add('card__button-delete_visible');
    }
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
    this._deleteButton = this._newCard.querySelector('.card__button-delete');
    this._imgButton = this._newCard.querySelector('.card__image');

    this._likeButton.addEventListener('click', () => this._likeCard());
    this._deleteButton.addEventListener('click', (evt) => this._handleDeleteClick(evt));
    this._imgButton.addEventListener('click', () => {
      console.log(this._name, this._link);
      this._handleCardClick(this._name, this._link)});
  }

  createCard() {
    this._newCard = this._getTemplate();
    this._customizeCard();
    this._addEventListeners();
    return this._newCard;
  }
}
