
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('person').del()
    .then(function () {
      // Inserts seed entries
      return knex('person').insert([
        {id: 1, name: 'daniel haha'},
        {id: 2, name: 'daniela'},
        {id: 3, name: 'rowValue3'}
      ]);
    });
};
