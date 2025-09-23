const express = require('express')
const { register, signIn,getUser } = require('../controllers/user.controller')
const authentication = require('../middlewares/authentication.mw')
const authorizationMW = require('../middlewares/authorization.mw')


const user_routes = express.Router()

user_routes.post('/register',register)
user_routes.post('/signin',signIn)
user_routes.get('/', authentication ,authorizationMW("admin") ,getUser)


module.exports= user_routes