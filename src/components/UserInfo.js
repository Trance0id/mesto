export default class UserInfo {

  _userNameElement;
  _userAboutElement;
  _userAvatarElement;
  _userId;

  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._userNameElement = document.querySelector(nameSelector);
    this._userAboutElement = document.querySelector(aboutSelector);
    this._userAvatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userData = {};
    userData['name'] = this._userNameElement.textContent;
    userData['about'] = this._userAboutElement.textContent;
    return userData;
  }

  getUserId() {
    return this._userId;
  }

  setUserId(id) {
    this._userId = id;
  }

  setUserInfo({ name, about }) {
    this._userNameElement.textContent = name;
    this._userAboutElement.textContent = about;
  }

  setUserAvatar(link) {
    this._userAvatarElement.src = link;
  }
}
