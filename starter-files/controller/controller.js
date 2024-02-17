import factView from "../view/factView.js";
import buttonView from "../view/buttonView.js";
import * as model from "../model/model.js";

const buttonFact = document.querySelector(".share-fact");
const form = document.querySelector(".fact-form");

const controlFacts = async function () {
  try {
    await model.loadFacts();
    factView.render(model.data.facts);
  } catch (error) {
    console.error(error);
  }
};
const controlButton = async function () {
  try {
    await model.loadCategories();
    buttonView.render(model.data.categories);
  } catch (error) {
    console.error(error);
  }
};

const controlForm = function () {
  buttonFact.addEventListener("click", () => {
    form.classList.toggle("hidden");
  });
};

const controlFilter = async function (category_data) {
  const filter_data = model.loadFilter(category_data);
  // model.loadFilter(category_data);
  factView.render(filter_data);
  // factView.update(filter_data);
};

const controlVotes = async function () {
  await model.updateVote(1, 1, 1);
};

const controlPostNewFact = function () {
  const inputFact = document.querySelector(".input-fact");
  const inputSource = document.querySelector(".input-source");
  const inputCategory = document.querySelector(".input-category");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // console.log(inputFact.value, inputSource.value, inputCategory.value);
    const check = await model.postFact(
      inputFact.value,
      inputSource.value,
      inputCategory.value
    );
    if (check) {
      await model.loadFacts();
      factView.render(model.data.facts);
    }
  });
};

const init = function () {
  buttonView.clickCategoryHandler(controlFilter);
  factView.handlerClickVote(controlVotes);
  controlFacts();
  controlButton();
  controlForm();
  controlPostNewFact();
};

init();
