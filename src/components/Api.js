class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInfo() {
    return fetch(this._baseUrl + '/character/7');
  }

  getInitialCards() {
    let str = '1';
    const max = prompt('Сколько карточек вывести???');
    for (let i = 0; i < max; i++) {

      str += ',';
      str += String(i);

    }

    return fetch(this._baseUrl + `/character/[${str}]`);
  }


}

const api = new Api({
  baseUrl: 'https://rickandmortyapi.com/api',
  headers: {
    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
    'Content-Type': 'application/json'
  }
});

export default api;
