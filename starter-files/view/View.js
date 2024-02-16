export default class View {
  _parentEl;
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup = `
              <div class="spinner">
                <svg>
                  
                </svg>
              </div>
        `;
    this._clear;
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentEl.innerHTML = "";
  }
}
