const app = require("express")
const appRouter = app.Router()
const authenticationMiddleware = require('../middleware/authentication.middleware.cjs')
const  register  = require("../controllers/registerController.cjs")
const loginController = require('../controllers/loginController.cjs')
//import auth middleware


appRouter.get("/", authenticationMiddleware)
appRouter.post("/register", register)
appRouter.post("/login", loginController)
// appRouter.get("/logout")


module.exports= appRouter