import View from "./View.js";

export class ButtonView extends View {
  _parentEl = document.querySelector(".category-list");
  clickCategoryHandler(handler) {
    this._parentEl.addEventListener("click", function (e) {
      let btn = e.target.closest(".btn");
      if (!btn) return;
      const category_data = btn.textContent.trim().toLowerCase();
      handler(category_data);
    });
  }
  _generateMarkup() {
    return (
      `<li class="category">
        <button class="btn btn-all-categories">All</button>
      </li>` +
      this._data
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
        .join("")
    );
  }
}

export default new ButtonView();
