"use strict";


module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/snacks_crud'
    },
    test: {
        client: 'pg',
        connection: 'postgres://localhost/snacks_crud_test'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
    }
};
