const app = require("express")
const appRouter = app.Router()
const authenticationMiddleware = require('../middleware/authentication.middleware.cjs')

//import auth middleware

appRouter.get("/user",(req, res)=>{
    res.status(200).send("On /user route")

})
appRouter.get("/register",authenticationMiddleware, (req, res)=>{
    res.status(200).send("on register page")
} )
// appRouter.get("/login")
// appRouter.get("/logout")


module.exports= appRouter