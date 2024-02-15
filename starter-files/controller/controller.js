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
const controlPostNewFact = function () {
  const buttonPost = document.querySelector(".post");
  const inputFact = document.querySelector(".input-fact");
  const inputSource = document.querySelector(".input-source");
  const inputCategory = document.querySelector(".input-category");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inputFact.value);
    console.log(inputSource.value);
    console.log(inputCategory.value);
  });
};

const init = function () {
  controlFacts();
  controlButton();
  controlForm();
  controlPostNewFact();
};

init();
