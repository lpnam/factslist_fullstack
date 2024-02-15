import database from "../db.js";

export const data = {
  categories: [],
  facts: [],
};

export const loadFacts = async function () {
  try {
    let { data: facts } = await database.rpc("fetch_facts");
    facts.map((fact) => data.facts.push(fact));
  } catch (error) {
    throw error;
  }
};

export const loadCategories = async function () {
  try {
    let { data: categories } = await database.rpc("fetch_categories");
    categories.map((category) => data.categories.push(category));
  } catch (error) {
    throw error;
  }
};

// LINK TO APP SAMPLE DATA: https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0

// 👍 🤯 ⛔️
