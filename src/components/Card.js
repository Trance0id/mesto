export default class Card {

  _id;
  _name;
  _link;
  _templateSelector;
  _newCard;
  _likeButton;
  _deleteButton;
  _imgButton;
  _launchZoomCard;
  _likedList;
  _numLikes;

  constructor({ name, link, likes, owner, _id }, templateSelector, cardMethods) {
    this._id = _id;
    this._name = name;
    this._link = link;
    this._likedList = likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = cardMethods.handleCardClick;
    this._handleDeleteClick = cardMethods.handleDeleteClick;
    this._isMyCard = cardMethods.isMyCard;
    this._handleLikeClick = cardMethods.handleLikeClick;
    this._isLikedByMe = cardMethods.isLikedByMe;
  };

  _getTemplate() {
    return document.querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

  _customizeCard() {
    this._likeButton = this._newCard.querySelector('.card__button-like');
    this._deleteButton = this._newCard.querySelector('.card__button-delete');
    this._img = this._newCard.querySelector('.card__image');

    this._newCard.querySelector('.card__caption-title').textContent = this._name;

    this._img.setAttribute('src', this._link);
    const imageAltPrefix = 'Фото места под названием';
    this._img.setAttribute('alt', `${imageAltPrefix} ${this._name}`);

    this._likes = this._newCard.querySelector('.card__likes-number');
    this.setLikedList(this._likedList);
    this.setLike(this._isLikedByMe(this._likedList))

    if (this._isMyCard()) {
      this._deleteButton.classList.add('card__button-delete_visible');
    }
  }

  getLikedList() {
    return this._likedList;
  }

  setLikedList(likedList) {
    this._likedList = likedList;
    this._likes.textContent = this._likedList.length;
  }

  setLike(iLikeIt) {
    iLikeIt
    ? this._likeButton.classList.add('card__button-like_active')
    : this._likeButton.classList.remove('card__button-like_active');
  }

  _addEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this);
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick(this._newCard, this._id)
    });
    this._img.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  createCard() {
    this._newCard = this._getTemplate();
    this._customizeCard();
    this._addEventListeners();
    return this._newCard;
  }
}
