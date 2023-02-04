export default class UserInfo {

  _userNameElement;
  _userAboutElement;

  constructor({ nameSelector, aboutSelector }) {
    this._userNameElement = document.querySelector(nameSelector);
    this._userAboutElement = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    const userData = {};
    userData['name'] = this._userNameElement.textContent;
    userData['about'] = this._userAboutElement.textContent;
    return userData;
  }

  setUserInfo({ name, about }) {
    this._userNameElement.textContent = name;
    this._userAboutElement.textContent = about;
  }
}
