const popup = document.querySelector('.popup');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonCloseEdit = document.querySelector('.popup__close');
const nameField = document.querySelector('.profile__name');
const aboutField = document.querySelector('.profile__description')
const formEditProfile = popup.querySelector('form[name="editprofile"]');
const nameInput = formEditProfile.querySelector('input[name="name"]');
const aboutInput = formEditProfile.querySelector('input[name="about"]');

function editProfile() {
  nameInput.value = nameField.textContent;
  aboutInput.value = aboutField.textContent;
  popup.classList.add('popup_opened');
}

function closeEdit() {
  popup.classList.remove('popup_opened');
}

buttonEditProfile.addEventListener('click', editProfile);

buttonCloseEdit.addEventListener('click', closeEdit);

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  nameField.textContent = nameInput.value;
  aboutField.textContent = aboutInput.value;
  closeEdit();
}

formEditProfile.addEventListener('submit', handleEditProfileSubmit);
