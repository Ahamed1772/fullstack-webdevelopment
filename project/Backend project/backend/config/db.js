import pg from "../../node_modules/@types/pg";
import dotenv from "dotenv";

dotenv.config();
const { PG_USER,PG_HOST,PG_DATABASE,PG_PASSWORD,PG_PORT} = process.env;

const db = new pg.Client({
    "database" : PG_DATABASE,
    "host" : PG_HOST,
    "port" : PG_PORT,
    "user" : PG_USER,
    "password" : PG_PASSWORD
});
db.connect();




export default db;