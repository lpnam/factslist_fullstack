import database from "../db.js";

export const data = {
  categories: [],
  facts: [],
  filter: [],
};

export const loadFacts = async function () {
  try {
    data.facts = [];
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

export const updateVote = async function (type_btn, fact_id) {
  try {
    const index = data.facts.findIndex((fact) => fact.fact_id === fact_id);
    if (index < 0) throw "Invalid ID";

    if (type_btn === "interesting") data.facts[index].votesinteresting++;
    else if (type_btn === "mindblowing") data.facts[index].votesmindblowing++;
    else if (type_btn === "votefalse") data.facts[index].votesfalse++;

    await database
      .from("facts")
      .update({
        votesMindblowing: data.facts[index].votesmindblowing,
        votesInteresting: data.facts[index].votesinteresting,
        votesFalse: data.facts[index].votesfalse,
      })
      .eq("id", fact_id);
  } catch (error) {
    throw error;
  }
};

export const loadFilter = function (category) {
  data.filter = [];
  if (category === "all") {
    data.filter = data.facts;
    return;
  }
  data.filter = data.facts.filter((fact) => fact.category === category);
};

// LINK TO APP SAMPLE DATA: https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0

// 👍 🤯 ⛔️
