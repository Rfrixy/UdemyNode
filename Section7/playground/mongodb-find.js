// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log("Unable to connect to mongoDB server");
  }

  console.log("Connected to MongoDB server");
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id:ObjectID('5a97bafefadb970738546456')
  // }).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log("Unable to fetch todos: ",err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Count: ${count}`);
  // },(err)=>{
  //   console.log("Unable to fetch todos: ",err);
  // });

  db.collection('Users').find({
    name:"Jen"
  }).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log("Unable to fetch todos: ",err);
  });

  // client.close();
});
``
