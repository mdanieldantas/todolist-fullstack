
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: YSQL_PASSWORD,
    database: MYSQL_DB,
});

module.exports = connection;