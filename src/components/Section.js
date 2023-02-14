export default class Section {

  _container;

  constructor({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    items.reverse().forEach(item => {
      this._renderer(item);
    });
  }

}