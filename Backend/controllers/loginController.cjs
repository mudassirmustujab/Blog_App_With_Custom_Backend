const jwt = require('jsonwebtoken')
const USER = require('../models/model.cjs')
const bcrypt = require('bcrypt')


const login = async (req, res)=> {

    const {email, password} = req.body
    
    if (email && password) {
        
        const userData = await USER.findOne({where:{email:email}})
        const {id} = userData
        if(!userData){
            res.status(404).send('User does not exist Database =======================================================================')
        }   
        if(userData){
            const passwordComparison = await bcrypt.compare(password, userData.password)
            console.log(passwordComparison,typeof password, 'password comparison - Testing log')
            console.log(userData.id, 'userdata .id')
            if (passwordComparison) {
                const jsonwebtoken = jwt.sign({id},'29hodh*(he9(*fjh',{expiresIn:'6m'})
                res.status(200).json({
                    email:userData.email,
                    token: jsonwebtoken
                })
            }
        }
        else{
            console.log('User does not exist in Database')
            res.send('User does not exist in Database')
        }
    console.log(userData.email ,'user data')

    }
    else{
        res.status(500).send('Enter both email and password')
        console.log('Enter both email and password')
    }
}


module.exports = login