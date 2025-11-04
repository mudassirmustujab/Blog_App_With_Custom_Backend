const express = require('express')
const appRouter = express.Router()
const authenticationMiddleware = require('../middleware/authentication.middleware.cjs')
const {postAuthor} = require('../controllers/authorController.cjs')
const authorizationMiddleware = require('../middleware/authorization.middleware.cjs')


appRouter.get('/',authenticationMiddleware, (req,res)=>{res.send('on Author page')} )
appRouter.get('/login', (req,res)=>{res.send('on Author login page')} )
appRouter.get('/register', (req,res)=>{res.send('on Author register page')} )
appRouter.post('/create', authenticationMiddleware, authorizationMiddleware(['admin','author']) , postAuthor)



module.exports = appRouter
//1️⃣ Public routes (if needed, rarely for authors)

// Usually, nothing here.#########################################################################

// Authors are registered users, so almost everything requires login.

// 2️⃣ Protected routes (JWT required)

// Author CRUD on their content (blogs/courses):

// POST   /author/create      → create a new blog/course
// GET    /author/my-content → list all content by this author
// GET    /author/:id        → view a specific content item (optional)
// PUT    /author/:id        → edit/update own content
// DELETE /author/:id        → delete own content


// Profile management:

// GET    /author/profile     → view own profile
// PUT    /author/profile     → update profile (name, email, password)


// Optional extra features:

// POST   /author/publish/:id → publish a draft
// GET    /author/stats       → get stats on their content (views, likes)