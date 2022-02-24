
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, bookName: 'A Court of Thorns and Roses', review:'A pretty story about finding love in tragedy'},
        {id: 2, bookName: 'Spinning Silver', review: 'Silenced women become the saviors of the world'},
        {id: 3, bookName: 'In the Garden of Spite', review: 'A lesson in letting hatred fuel you'},
        {id: 4, bookName: 'Murder on the Orient Express', review: 'A comment on the grey-ness of morality'}
      ]);
    });
};
