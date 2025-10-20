const express = require("express")
const app = express()
const routes = require("./routes/user_routes.cjs")
const cors = require('cors')


// Middleware
app.use(cors({origin:'http://localhost:5173'}))
app.use(express.json())

app.use("/user", routes)
app.use("/author", routes)
app.use("/blogs", routes)

module.exports = app