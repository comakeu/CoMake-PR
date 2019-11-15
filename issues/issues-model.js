const db = require("../database/dbConfig");

function get() {
  return db("issues");
}

function insert(issue) {
  return db("issues")
    .insert(issue)
    .then(([id]) => db("issues").where({ id }));
}

module.exports = {
  get,
  insert
};
