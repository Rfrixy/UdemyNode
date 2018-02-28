const express = require('express')

var app =  express();

app.get('/', (req,res) =>{
  res.send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});


app.get('/users', (req,res) =>{
  res.send({
    users: [
      { firstName: "Divesh", age:"21"},
      { firstName: "Chhavi", age:"22"},
      { firstName: "Varun", age:"23"}
    ]
  });
});


app.listen(3000);

module.exports.app = app;
