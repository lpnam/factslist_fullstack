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
                <image class="spin" src="./img/loading.png" alt="spin">
              </div>
        `;
    this._clear;
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    // convert string to DOM object
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._parentEl.querySelectorAll("*"));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      //Update change text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
      }
      //Update change attribute
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach((attr) =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }
  _clear() {
    this._parentEl.innerHTML = "";
  }
}
