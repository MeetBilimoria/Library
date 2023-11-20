const express = require("express");
const mongoose = require('mongoose');
const bookrouter = require("./routes/book-routes");
const registerrouter = require("./routes/register-routes");
const loginrouter = require("./routes/login-routes")
const app = express();
const cors = require('cors');

// Middlewares
app.use(cors());
app.use(express.json());

// Set up routes
app.use("/book", bookrouter);
app.use("/register", registerrouter);
app.use("/login",loginrouter);

// Connect to the first database
mongoose.connect("mongodb+srv://bilimoriameet007:bilimoria@cluster0.hk7sg0i.mongodb.net/library?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to the first database");
        app.listen(5001, () => {
            console.log("Server is running on port 5001 for the first database");
        });
    })
    .catch((err) => console.log("Error connecting to the first database:", err));

// Connect to the second database using createConnection
const db2Connection = mongoose.createConnection("mongodb+srv://bilimoriameet007:bilimoria@cluster0.ankcxpm.mongodb.net/login?retryWrites=true&w=majority");

db2Connection.on('connected', () => {
    console.log("Connected to the second database");

   

    app.listen(5500, () => {
        console.log("Server is running on port 5500 for the second database");
    });
});

db2Connection.on('error', (err) => {
    console.log("Error connecting to the second database:", err);
});
