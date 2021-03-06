
exports.up = function(knex) {
  return knex.schema.createTable("issues", tbl => {
    tbl.increments();
    tbl.string("description", 512).notNullable();
    tbl.float("latitude").notNullable();
    tbl.float("longitude").notNullable();
    tbl.string("username").notNullable();
    tbl.string("imgURL").notNullable();
    tbl.integer("votes").unsigned().defaultTo(1);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("issues");
};
