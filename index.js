var mysql = require('mysql');


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var con = mysql.createConnection({
        host: process.env.HOST || "localhost",
        user:  process.env.USER_NAME || "root",
        password: process.env.PASSWORD|| "",
        database: process.env.DATABASE || ""
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
      
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})