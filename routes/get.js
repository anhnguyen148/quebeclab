const express = require("express");
const router = express.Router();
const { client, mongoDBServerConnect} = require("../dbHelper");

router.get("/", async (req, res) => {
    mongoDBServerConnect().catch(console.dir);
    const collection = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);
    await collection.find().toArray().then(async result => {
        res.render("index", {data: result});
        console.log("Retrieve data successfully", {data: result});
        // res.json({message: "Retrieve data successfully", data: result});
    }).catch(e => console.log("Error: " + e));


});

module.exports = router;