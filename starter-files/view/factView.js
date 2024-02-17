import View from "./View.js";
import * as time from "../time.js";

export class FactView extends View {
  _parentEl = document.querySelector(".fact-list");
  // _parentButton = document.querySelector(".vote-buttons");
  handlerClickVote(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".vote-button");
      if (!btn) return;
      console.log(btn.dataset.vote);
      handler();
      // if (btn.dataset.vote === 'interesting') handler[0]();
      // else if (btn.dataset.vote === 'mindblowing') handler[1]();
      // else if (btn.dataset.vote === 'votefalse') handler[3]();
    });
  }
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
                          <button data-vote="interesting" class="vote-button">👍 <strong>${
                            data.votesinteresting
                          }</strong></button>
                          <button data-vote="mindblowing" class="vote-button">🤯 <strong>${
                            data.votesmindblowing
                          }</strong></button>
                          <button data-vote="votefalse" class="vote-button">⛔️ <strong>${
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
