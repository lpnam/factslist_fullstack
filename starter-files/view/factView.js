import View from "./View.js";
import * as time from "../time.js";

export class FactView extends View {
  _parentEl = document.querySelector(".fact-list");
  _generateMarkup() {
    return this._data
      .map(
        (data) => `
                    <li class="fact">
                        <p>${data.text}
                          <a class="source" href="${
                            data.source
                          }" target="_blank">(Source)</a>
                          <span style="color: ${data.color}" class="tag">#${
          data.category
        }</span>
                          <p> ${time.displayTime(data.createdin)}</p>
                        </p>
                        <div class="vote-buttons">
                          <button>👍 <strong>${
                            data.votesinteresting
                          }</strong></button>
                          <button>🤯 <strong>${
                            data.votesmindblowing
                          }</strong></button>
                          <button>⛔️ <strong>${
                            data.votesfalse
                          }</strong></button>
                        </div>
                    </li>
                `
      )
      .join("");
  }
}

export default new FactView();
