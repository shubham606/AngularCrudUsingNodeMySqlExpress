const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'angular'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all users
app.get('/api/users',(req, res) => {
  let sql = "SELECT * FROM registration";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single user 
app.get('/api/users/:id',(req, res) => {
  let sql = "SELECT * FROM registration WHERE id='"+req.params.id+"'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new product
app.post('/api/users',(req, res) => {
  let data = {name: req.body.name,email: req.body.email, password: req.body.password,mobile: req.body.mobile,role:req.body.role};
  let sql = "INSERT INTO registration SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//update product
app.put('/api/users/:id',(req, res) => {
  let sql = "UPDATE registration SET name='"+req.body.name+"',email='"+req.body.email+"',password='"+req.body.password+"',mobile='"+req.body.mobile+"' WHERE id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
//profile product
app.put('/api/users/profile/:id',(req, res) => {
  let sql = "UPDATE registration SET name='"+req.body.name+"',email='"+req.body.email+"',password='"+req.body.password+"',mobile='"+req.body.mobile+"' ,image='"+req.body.image+"'WHERE id="+req.params.id;
 
 let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete product
app.delete('/api/users/:id',(req, res) => {
  let sql = "DELETE FROM registration WHERE id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});



 
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});



	