const cors = require('cors')
const express = require('express')
const user_routes = require("./routes/user.route");
const author_routes = require("./routes/author.route");
const blog_routes = require("./routes/blog.route");
const category_routes = require("./routes/category.route");
// const author_routes = require('./routes/author.route');

const app = express()


app.use(cors("*"))

app.use(express.json())


// resource USER
app.use('/api/v1/user',user_routes)
app.use('/api/v1/author',author_routes)
app.use('/api/v1/blog',blog_routes)
app.use('/api/v1/category',category_routes)








module.exports = app

