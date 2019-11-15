const faker = require("faker");

const fakeSeed = [];

for(let i = 0; i < 25; i++){
  fakeSeed.push(
    {
      id: i,
      username: faker.name.findName(),
      description: faker.lorem.paragraph(),
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
      imgURL: faker.image.city(),
    }
  )
}

exports.seed = function(knex) {
  return knex('issues').truncate()
    .then(function () {
      return knex('issues').insert(fakeSeed);
    });
};
