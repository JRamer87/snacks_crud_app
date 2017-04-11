"use strict";


module.exports = {

    development: {
        client: 'pg',
        connection: {
            database: 'postgres://localhost/snacks_crud'
        }
    },
    test: {
        client: 'pg',
        connection: {
            database: 'postgres://localhost/snacks_crud_test'
        }
    },
    production: {
        client: 'postgresql',
        connection: {
            database: process.env.DATABSE_URL,
        }
    }
};
