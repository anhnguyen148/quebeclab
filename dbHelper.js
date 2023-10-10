const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// connect to server
async function mongoDBServerConnect() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } catch(e) {
    console.log(e)
  } 
}

module.exports = { client, mongoDBServerConnect };
