const db = require('../../data/db-config')

function get() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(user_id) {
    return db('users').select('user_id', 'username').where('user_id', user_id).first()
}

async function addUser(user) {
    const [user_id] = await db('users').insert(user)
    return findById(user_id)
}

const updateById = async (user_id, user) => {
    await db('users').where('user_id', user_id).update(user)
    return getUserById(user_id)
}

const deleteById = user_id => {
    return db('users').where('user_id', user_id).del()
}



module.exports = {get, findBy, findById, addUser, updateById, deleteById}