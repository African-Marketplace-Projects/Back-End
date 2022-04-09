const users = [
    {
        username: 'Leviticus',
        password: '1234',
        business_name: 'Jones Hardware',
    },
    {
        username: 'Katelyn',
        password: '1234',
        business_name: 'LK Rose',
    },
]

const items = [
    {
        item_name: 'squashes',
        item_price: '3.00',
        item_description: 'yummy yellow squash',
        item_location: 'north Africa',
        user_id: 1,
    },
    {
        item_name: 'apples',
        item_price: '3.50',
        item_description: 'yummy golden crisp',
        item_location: 'central Africa',
        user_id: 2,
    }
]

exports.seed = async function (knex) {
    await knex('users').insert(users)
    await knex('items').insert(items)
}