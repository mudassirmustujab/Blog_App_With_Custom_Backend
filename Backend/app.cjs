const express = require("express")
const app = express()
const routes = require("./routes/routes.cjs")


// Middleware

app.use(express.json())

app.use("/", routes, (req, res)=>{
    res.status(200).send("on homepage")
})

module.exports = app