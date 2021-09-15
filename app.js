const path = require("path")
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/static/HTML/index.html", )
});

app.listen(port,() => {
    console.log("run on port 3000 on heroku")
});