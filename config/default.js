'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 4000;
module.exports = {
    app: {
        name: "node-test-api",
        superSecret: "ipm-power",
        baseUrl: `http://localhost:${PORT}`,
        port: PORT,

    },

    api: {
        prefix: '^/api/v[1-9]',
        version: [1]
    },
    database: {
        url: process.env.DB_URL,
    }
};
