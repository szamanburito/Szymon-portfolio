const path = require("path")
const express = require('express')
const app = express()

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/static/HTML/index.html", )
});

app.listen(process.env.PORT || 5000,() => {
    console.log("run on heroku")
});