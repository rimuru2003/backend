import { MongoClient } from "mongodb";

const Client = new MongoClient("mongodb://127.0.0.1");

await Client.connect();

const db = Client.db("mongo_db_nodejs");
const userCollection = db.collection("user");

userCollection.insertOne({ name: "Aryan ", surName: "Singh", age: 22 });
