import Popup from "./Popup";

export default class PopupWithForm extends Popup {

  _form;
  _inputs;
  _inputValues;

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }

  close() {
    super.close();
    this._form.clear();
  }

  _getInputValues() {
    this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));

    this._inputs.forEach(input => {
        this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => this._handleFormSubmit(this._getInputValues()));
  }
}
