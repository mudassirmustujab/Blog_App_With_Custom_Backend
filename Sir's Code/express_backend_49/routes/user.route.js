const express = require('express')
const { register, signIn,getUser,verifyEmail,updateRole } = require('../controllers/user.controller')
const authentication = require('../middlewares/authentication.mw')
const authorizationMW = require('../middlewares/authorization.mw')


const user_routes = express.Router()

user_routes.post('/register',register)
user_routes.post('/signin',signIn)
user_routes.get('/verify',verifyEmail)
user_routes.get('/', authentication ,authorizationMW("admin") ,getUser)
user_routes.patch('/role/:id',authentication ,authorizationMW("admin"), updateRole)


module.exports= user_routes