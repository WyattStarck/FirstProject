const express = require("express")//import it
const app = express()//invoke dat shit
const path = require("path")//for node to use html files nmp install path
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/Vader.html"))
})
app.get("/Nooo", (req, res) => {
    res.sendFile(path.join(__dirname, "/Nooo.html"))
})
app.listen(1234, () => {
    console.log("server running at local host")
})