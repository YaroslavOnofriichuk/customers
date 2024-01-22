import dotenv from "dotenv";
import { connect } from 'mongoose';
import app from "./app";
import generateCustomers from "./customers/generateCustomers";

dotenv.config();
const { DB_URI } = process.env;
const DELAY = 200;

async function run() {
    try {
        await connect(DB_URI || "");
        console.log("Database connection successful");

        app.listen(3000, () => {
            console.log("Server running. Use our API on port: 3000");
            setInterval(generateCustomers, DELAY);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

run();