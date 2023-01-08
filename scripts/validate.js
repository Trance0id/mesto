const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const showInputError = (form, input, errorMessage, config) => {
  const error = form.querySelector(`.${input.name}-error`);
  input.classList.add(config.inputErrorClass);
  error.textContent = errorMessage;
  error.classList.add(config.errorClass);
};

const hideInputError = (form, input, config) => {
  const error = form.querySelector(`.${input.name}-error`);
  input.classList.remove(config.inputErrorClass);
  error.classList.remove(config.errorClass);
  error.textContent = '';
};

const checkInputValidity = (form, input, config) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, config);
  } else {
    hideInputError(form, input, config);
  }
};

const hasInvalidInput = (inputs) => {
  return inputs.some(input => {
    return !input.validity.valid;
  });
};

const toggleSubmitButtonState = (inputs, submitButton, config) => {
  if (hasInvalidInput(inputs)) {
    submitButton.setAttribute('disabled', '');
    submitButton.classList.add(config.inactiveButtonClass);
  } else {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove(config.inactiveButtonClass);
  }
};

const setEventListeners = (form, config) => {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const submitButton = form.querySelector(config.submitButtonSelector);
  toggleSubmitButtonState(inputs, submitButton, config);
  inputs.forEach((input) => {
    input.addEventListener('input', function () {
      checkInputValidity(form, input, config);
      toggleSubmitButtonState(inputs, submitButton, config);
    });
  });
};

const removeValidationErrors = (form, config) => {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const submitButton = form.querySelector(config.submitButtonSelector);
  toggleSubmitButtonState(inputs, submitButton, config);
  inputs.forEach((input) => {
    hideInputError(form, input, config);
  });
};

const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
      setEventListeners(form, config);
    });
};

enableValidation(validationConfig);
