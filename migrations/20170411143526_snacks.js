"use strict";


exports.up = function(knex, Promise) {
    return knex.schema.createTable('snacks', (table) => {
        table.increments()
            .primary();
        table.string('name')
            .notNullable();
        table.string('image_url')
            .notNullable()
            .defaultTo('');
        table.string('review_description')
            .notNullable()
            .defaultTo('');
        table.decimal('rating', 8, 1)
            .notNullable()
            .defaultTo('0');
    });

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('snacks');
};
