import factView from "../view/factView.js";
import buttonView from "../view/buttonView.js";
import * as model from "../model/model.js";

const buttonFact = document.querySelector(".share-fact");
const form = document.querySelector(".fact-form");

const controlFacts = async function () {
  try {
    factView.renderSpinner();
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

const controlFilter = function (category_data) {
  model.loadFilter(category_data);
  // model.loadFilter(category_data);
  factView.render(model.data.filter);
  // factView.update(filter_data);
};

const controlVotes = async function (type_btn, fact_id) {
  await model.updateVote(type_btn, fact_id);
  factView.render(model.data.filter);
};

const controlDelete = async function (fact_id) {
  await model.deleteFact(fact_id);
  factView.render(model.data.filter);
  await model.loadFacts();
};

const controlPostNewFact = function () {
  const inputFact = document.querySelector(".input-fact");
  const inputSource = document.querySelector(".input-source");
  const inputCategory = document.querySelector(".input-category");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
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
  factView.handlerClickDelete(controlDelete);
  controlFacts();
  controlButton();
  controlForm();
  controlPostNewFact();
};

init();
