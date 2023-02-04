import Popup from "./Popup";

export default class PopupWithForm extends Popup {

  _form;
  _inputs;

  constructor(popupSelector, handleFormSubmit, resetValidation) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._resetValidation = resetValidation;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
  }

  close() {
    this._form.reset();
    this._resetValidation();
    super.close();
  }

  getForm() {
    return this._form;
  }

  fillInputs(inputValues) {
    this._inputs.forEach(input => {
      input.value = inputValues[input.name];
    });
  }

  _getInputValues() {
    const inputValues = {};
    this._inputs.forEach(input => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
