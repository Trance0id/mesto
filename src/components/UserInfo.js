export default class UserInfo {

  _userNameElement;
  _userAboutElement;
  _userInfo;

  constructor({nameSelector, aboutSelector}) {
    this._userNameElement = document.querySelector(nameSelector);
    this._userAboutElement = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    this._userInfo['name'] = this._userNameElement.textContent;
    this._userInfo['about'] = this._userAboutElement.textContent;
  }

  setUserInfo(name, about) {
    this._userNameElement.textContent = name;
    this._userAboutElement.textContent = about;
  }
}
