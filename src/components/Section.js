export default class Section {

  _items;
  _container;

  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    // console.log(element);
    this._container.prepend(element);
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

}
