import dbConfig from '../config/db.config.js';
import Sequelize from "sequelize";

// Create a connection to the database
const db = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.DB_TYPE
    }
);

// open the MySQL connection
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

export default db;