
exports.up = function(knex) {
    return knex.schema.createTable('books', (tbl) => {
        tbl.increments();
        tbl.string('bookName', 128).unique().notNullable();
        tbl.string('review', 500).unique().notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('books');
  };
  