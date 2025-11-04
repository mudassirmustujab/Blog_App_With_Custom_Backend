const authorizationMW = (allowedRoles)=>{

    return (req,res,next)=>{
        try {
            // console.log(req.role);
            // console.log(req.role == allowedRoles);
            if(req.role == allowedRoles){
    
                next()
            }
            else{
    
                res.status(401).json({msg:"Unauthorized user request"})
                 
            }
        } catch (error) {
            
            res.status(500).json({msg:error.message})
        }
    }

} 



module.exports = authorizationMW