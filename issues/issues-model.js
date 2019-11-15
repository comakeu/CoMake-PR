const db = require("../database/dbConfig");

function get(){
    return db("issues");
}

function insert(issue){
    return db("issues").insert(issue)
}

module.exports = {
    get,
    insert
}