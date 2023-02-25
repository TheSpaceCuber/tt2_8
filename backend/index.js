import express from 'express';
import cors from 'cors';
import SequelizeStore from "connect-session-sequelize";
import session from "express-session";
import db from "./models/db.model.js";
import Employees from "./models/employees.model.js";
import InsurancePolicies from './models/policy.model.js';
import Claims from './models/claims.model.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.options('*', cors());

const SessionStore = SequelizeStore(session.Store);

const store = new SessionStore({
    db: db
});

// initialize tables

(async() => {
    try {
        await db.sync();
        console.log("Database synchronized successfully.");
    } catch (error) {
        console.error("Error synchronizing database: ", error);
    }

    await store.sync();
    console.log("Session store synchronized successfully.");

})();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});