const jwt = require('jsonwebtoken')
const USER = require('../models/user.model')

const authentication = async(req,res,next)=>{

    try{

        const isAuthentication = req.headers.Authorization || req.headers.authorization

        if(!isAuthentication){
            return res.status(404).json({msg:"please provide token to proceed"})
        }

        isAuthentication // bearer dklfjkdskjvjkhf

        let token = isAuthentication.split(' ')[1]
        console.log("before",token);
        
        jwt.verify(token, 'kgjfkljgfkljgklfjgkldfj' , async function(err,decoded_data){

            if(err){
                console.log("error :",err.message);

                return res.status(401).json({ msg: err.message });
            }
            else{

                console.log("decoded data ",decoded_data);
                req.id = decoded_data.id

                let user = await USER.findOne({where:{id : req.id}})

                req.role = user.role

                next()
            
            }

        });
        

    }
    catch(error){


    }

}


module.exports = authentication