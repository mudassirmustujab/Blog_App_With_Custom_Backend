const express = require("express")
const app = express()
const userRoutes = require("./routes/user_routes.cjs")
const authorRoutes  = require('./routes/author_routes.cjs')
const cors = require('cors')


// Middleware
app.use(cors({origin:'http://localhost:5173'}))
app.use(express.json())

app.use("/user", userRoutes)
app.use("/author", authorRoutes)
// app.use("/blogs", blogRoutes)

module.exports = app