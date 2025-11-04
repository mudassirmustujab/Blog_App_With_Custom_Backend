const jwt = require('jsonwebtoken')
const USER = require('../models/model.cjs')


console.log('ello')

 const authentication = async (req, res, next)=>{
    
    try {
       if (!req.headers.authorization) {
        return res.status(401).send('Token not found')
       }
       let token = req.headers.authorization
       let splitedToken = token.split(' ')[1]
       let verifyToken = jwt.verify(splitedToken, process.env.JWT_SECRET_KEY)
       
  

        console.log('token verification',verifyToken)
       let userData = await USER.findOne({where:{
        id:verifyToken.id
       }})

       if(userData == null){
        return res.send('Userdata is null')
       }
        console.log(`Access granted to homepage ${userData.email}`
        )
        next()
       
    } catch (error) {
        console.log(error, 'error is here')
        res.status(401).send('expired or invalid token')
    }
 }

module.exports = authentication