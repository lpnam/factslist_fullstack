import database from "../db.js";

export const data = {
  categories: [],
  facts: [],
  filter: [],
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

export const postFact = async function (text_data, source_data, category_data) {
  try {
    const { data, error } = await database
      .from("facts")
      .insert([
        { text: text_data, source: source_data, category: category_data },
      ])
      .select();
    if (error) {
      console.error("Error inserting data:", error.message);
      return false;
    } else {
      console.log("Data inserted successfully: ", data);
      return true;
    }
  } catch (error) {
    throw error;
  }
};

export const updateVote = async function (
  interesting,
  mindblowing,
  false_vote
) {
  try {
    const z = await database
      .from("facts")
      .update({ votesMindblowing: 0 + 1 })
      .eq("id", 27);
    // if (error) {
    //   console.error("Error updating data:", error.message);
    //   return false;
    // } else {
    //   console.log("Data inserted successfully: ", data);
    //   return true;
    // }
    console.log(z);
  } catch (error) {
    throw error;
  }
};

export const loadFilter = function (category) {
  if (category === "all") return data.facts;
  const filter_data = data.facts.filter((fact) => fact.category === category);
  // data.facts = filter_data;
  return filter_data;
};

// LINK TO APP SAMPLE DATA: https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0

// 👍 🤯 ⛔️
