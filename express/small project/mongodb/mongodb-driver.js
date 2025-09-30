import { MongoClient } from "mongodb";

const Client = new MongoClient("mongodb://127.0.0.1");

await Client.connect();

const db = Client.db("mongo_db_nodejs");
const userCollection = db.collection("user");

// userCollection.insertOne({ name: "Aryan ", surName: "Singh", age: 22 });

// userCollection.insertMany([
//   { name: "Karan", surName: "Singh", age: 12, role: "user" },
//   { name: "Akash", surName: "Singh", age: 32, role: "user" },
//   { name: "patil", surName: "Singh", age: 52, role: "admin" },
// ]);

// read
// const users = userCollection.find();

// // console.log(users);

// for await (const user of users) {
//   console.log(user);
// }

// // read in single line
// const user = await userCollection.find().toArray()
// console.log(user)

// use findone to fetch
// const userdata = await userCollection.findOne({ surName: "Singh" });
// console.log(userdata._id.toHexString());
// console.log(userdata);

// update

//  await userCollection.updateOne(
//   { name: "Karan" },
//   { $set: { age: 30 } }
// );


// delete

// await userCollection.deleteOne({name: "Karan "})