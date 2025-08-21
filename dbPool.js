const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'rlatjswls',
    database: 'kbdb',
    connectionLimit: 10,
    waitForConnections: true,
});
module.exports = pool;
