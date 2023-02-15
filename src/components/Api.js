export default class Api {

_baseUrl;
_headers;

  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _callFetch(endpoint, method, body, contentType) {
    const headers = this._headers;
    headers['Content-Type'] = contentType;
    return fetch(this._baseUrl + endpoint, { method, headers, body: JSON.stringify(body) })
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка! Статус: ${res.status}`);
      }
    });
  }

  getUserInfo() {
    return this._callFetch('users/me');
  }

  getInitialCards() {
    return this._callFetch('cards');
  }

  updateUserInfo(body) {
    return this._callFetch('users/me', 'PATCH', body, 'application/json');
  }

  changeAvatar(body) {
    return this._callFetch('users/me/avatar', 'PATCH', body, 'application/json');
  }

  addNewCard(body) {
    return this._callFetch('cards', 'POST', body, 'application/json');
  }

  deleteCard(cardId) {
    return this._callFetch(`cards/${cardId}`, 'DELETE');
  }

  likeCard(cardId) {
    return this._callFetch(`cards/${cardId}/likes`, 'PUT');
  }

  unlikeCard(cardId) {
    return this._callFetch(`cards/${cardId}/likes`, 'DELETE');
  }

}
