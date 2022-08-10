const db = require('../../data/db-config');

function get() {
    return db('items')
}

async function addItem(item) {
    const [item_id] = await db('items').insert(item)
    return findById(item_id)
}

function findById(item_id) {
    return db('items').select('item_id', 'item_name').where('item_id', item_id).first()
}

module.exports = {
    get,
    addItem,
    findById
}
