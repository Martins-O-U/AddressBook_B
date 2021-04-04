
exports.up = function (knex) {
    return knex.schema.createTable('Contact_Base', table => {
        table.increments('id');
        table.string('name', 150).notNullable()
        table.string('phoneNumber', 20).notNullable();
        table.string('email', 150)
        table.string('address', 250)
        table.string('note', 1000)
    })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Contact_Base')
};