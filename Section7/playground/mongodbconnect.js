// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log("Unable to connect to mongoDB server");
  }

  console.log("Connected to MongoDB server");
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // }, (err,result)=>{
  //   if(err){
  //     return console.log('Unable to isnert todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  //
  // db.collection('Users').insertOne({
  //   name:'Divesh Naidu',
  //   age:22,
  //   location:'New Delhi'
  // }, (err,result)=>{
  //   if(err){
  //     return console.log('Unable to isnert todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  //

  client.close();
});
