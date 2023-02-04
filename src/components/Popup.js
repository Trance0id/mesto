export default class Popup {

  _popup;

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscCloseBinded =  this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscCloseBinded);
  }

  close() {
    document.removeEventListener('keydown', this._handleEscCloseBinded);
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', evt => {
      if (evt.target === this._popup || evt.target === this._popup.querySelector('.popup__close')) {
        this.close();
      }
    });

  }
}
