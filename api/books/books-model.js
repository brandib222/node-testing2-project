const db = require('../../data/db-config')

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
}

function getAll() {
    return db('books')
  }
  
  function getById(id) {
    return db('books').where('id', id).first();
  }
  
  async function insert(book) {
    const [id] = await db('books').insert(book);
    return getById(id);
  }
  
  async function update(id, changes) {
    await db('books')
      .update({ book: changes.bookName, review:changes.review })
      .where('id', id); 
    return getById(id);
  }
  
  async function remove(id) {
    const result = await getById(id);
    await db('books')
      .where('id', id)
      .del();
    
    return result;
  }