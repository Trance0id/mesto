export default class FormValidator {

  constructor(config, form) {
    this._form = form;
    this._config = config;
    this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
  }

  _showInputError(input, errorMessage) {
    const error = this._form.querySelector(`.${input.name}-error`);
    input.classList.add(this._config.inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(this._config.errorClass);
  };

  _hideInputError(input) {
    const error = this._form.querySelector(`.${input.name}-error`);
    input.classList.remove(this._config.inputErrorClass);
    error.classList.remove(this._config.errorClass);
    error.textContent = '';
  };

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  };

  _hasInvalidInput() {
    return this._inputs.some(input => {
      return !input.validity.valid;
    });
  };

  _toggleSubmitButtonState() {
    if (this._hasInvalidInput(this._inputs)) {
      this._submitButton.setAttribute('disabled', '');
      this._submitButton.classList.add(this._config.inactiveButtonClass);
    } else {
      this._submitButton.removeAttribute('disabled');
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
    }
  };

  resetValidation() {
    const submitButton = this._form.querySelector(this._config.submitButtonSelector);
    this._toggleSubmitButtonState(submitButton);
    this._inputs.forEach(input => {
      this._hideInputError(input);
    });
  };

  _setEventListeners() {
    this._toggleSubmitButtonState();
    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleSubmitButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  }
}
