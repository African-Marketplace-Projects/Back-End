
exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
      users.increments('user_id')
      users.string('username', 128).notNullable().unique()
      users.string('password', 128).notNullable()
      users.string('business_name', 128).notNullable()
    })

    .createTable('items', items => {
      items.increments('item_id')
      items.string('item_name', 128).notNullable().unique()
      items.string('item_price', 128).notNullable()
      items.string('item_description', 128).notNullable()
      items.string('item_location', 128).notNullable()
      items.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('items')
  .dropTableIfExists('users')
};
