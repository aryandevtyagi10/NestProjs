import dotenv from "dotenv";


dotenv.config({
    path: "./.env",
});

let myusername = process.env.username;
let mydatabase = process.env.database;

console.log("database:",mydatabase);
console.log("value:",myusername);


console.log("Starting my backend project ");