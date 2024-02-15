import View from "./View.js";

export class ButtonView extends View {
  _parentEl = document.querySelector(".category-list");
  _generateMarkup() {
    return this._data
      .map(
        (data) => `
                    <li class="category">
                        <button
                            class="btn btn-category"
                            style="background-color: ${data.color}"
                        >
                            ${data.category}
                        </button>
                    </li>
                `
      )
      .join("");
  }
}

export default new ButtonView();
