// server creation
// always transmission via json
// frontend ---> GET request /api/dresses example

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express(); // returns server object

const notes = [
    {
        content: "Hello",
        id: 1
    },
    {
        content: "Hi",
        id: 2
    }
];

app.get("/", (request, response) => {
    // converting js to json
    response.json(notes);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`)
});
