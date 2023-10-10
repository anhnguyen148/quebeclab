const express = require("express");
const app = express();
require("dotenv").config();
const { mongoDBServerConnect, getMongoDB } = require("./dbHelper");
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// json parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// define routes
app.use("/", require("./routes/get"));
app.use("/form", require("./routes/formHandlers"));

app.listen(port, () => {
    console.log("Connected");
});