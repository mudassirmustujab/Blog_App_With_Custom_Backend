const jwt = require('jsonwebtoken')
const USER = require('../models/model.cjs')
const bcrypt = require('bcrypt')


const login = async (req, res)=> {

    try {
        
    
    const {email, password} = req.body
    console.log(req.body, 'req.body')
    if (email && password) {
        
        const userData = await USER.findOne({where:{email:email}})
        if(!userData){
            res.status(404).send('User does not exist Database =======================================================================')
            return;
        }   
       
            const {id} = userData

            const passwordComparison = await bcrypt.compare(password, userData.password)


            if (!passwordComparison) {
                res.status(400).send('Wrong Password')
                return;    
            }
            
            const jsonwebtoken = jwt.sign({id},String(process.env.JWT_SECRET_KEY),{expiresIn:'6m'})
            res.status(200).json({
                email:userData.email,
                token: `Bearer ${jsonwebtoken}`
            })
       

    }
    else{
        res.status(400).send('Please enter both email and password')
    }

    } catch (error) {
           console.error(error); // optional for dev logging
    res.status(500).send('Something went wrong on the server');
    }
}
   


module.exports = login