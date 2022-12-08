const popup = document.querySelector('.popup');
const editProfile = document.querySelector('.profile__edit-button');
const closeEdit = document.querySelector('.popup__close');
const nameField = document.querySelector('.profile__name');
const aboutField = document.querySelector('.profile__description')
const formElement = popup.querySelector('form');
const nameInput = formElement.querySelector('input[name="name"]');
const aboutInput = formElement.querySelector('input[name="about"]');

editProfile.addEventListener('click', function () {
  nameInput.value = nameField.textContent;
  aboutInput.value = aboutField.textContent;
  popup.classList.add('popup_opened');
});

closeEdit.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameField.textContent = nameInput.value;
  aboutField.textContent = aboutInput.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);
