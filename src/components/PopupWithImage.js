import Popup from "./Popup";

export default class PopupWithImage extends Popup {

  _popupImg;
  _popupCaption;

  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.popup__img');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  open(name, link) {
    super.open();
    const pictureAltPrefix = 'Фото места под названием ';
    this._popupImg.setAttribute('src', link);
    this._popupImg.setAttribute('alt', `${pictureAltPrefix}${name}`);
    this._popupCaption.textContent = name;
  }
}
