require("dotenv").config();
const { ObjectId } = require('mongodb');
const { client, mongoDBServerConnect } = require("../dbHelper");   

exports.insert = async (req,res) => {
    const collection = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);
    const { pjname } = req.body;

    await collection.insertOne({ pj: pjname }).then(async result => {
        console.log("Inserted successfully", {data: result}); 
        res.redirect('/');
    }).catch(e => console.log("Error: " + e));
}

exports.update = async (req,res) => {      

    const collection = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);  
    const { pjId, pjName } = req.body;

    await collection.findOneAndUpdate(
        { _id: new ObjectId(pjId) }, 
        { $set: { "pj": pjName } }, 
        { returnDocument: "after" }  
    ).then(async result => {
        res.redirect('/');
        console.log("Updated successfully", {data: result});
    }).catch(e => console.log("Error: " + e));
}

exports.delete = async (req,res) => {
    const collection = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);  
    const { pjId } = req.body;

    await collection.findOneAndDelete({ _id: new ObjectId(pjId) })
        .then(async result => {
            console.log("Deleted successfully", {data: result});
            res.redirect('/');
        }).catch(e => console.log("Error: " + e));
}