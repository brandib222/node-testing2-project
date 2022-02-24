
//require the database
const db = require('../../data/db-config')

// export this ish
module.exports = {
  add,
  update,
  remove,
  getAll,
  getById,
}

// get all of the books
function getAll() {
    return db('books')
  }
  
  // get individual books by id
  function getById(id) {
    return db('books').where('id', id).first();
  }
  
  // add a book
  async function add(book) {
    const [id] = await db('books').insert(book);
    return getById(id);
  }
  
  // update book info by id
  async function update(id, changes) {
    await db('books')
      .update({ book: changes.bookName, review:changes.review })
      .where('id', id); 
    return getById(id);
  }
  
  // remove a book by id from the list
  async function remove(id) {
    const result = await getById(id);
    await db('books')
      .where('id', id)
      .del();
    
    return result;
  }