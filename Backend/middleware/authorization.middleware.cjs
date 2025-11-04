

const authorizationMiddleware = (allowedRoles)=>{


    return (req, res, next)=>{
        try {
            
            if ( req.role !== allowedRoles) {
                return res.send('Incorrect user role')
            }

            res.send('Access Granted - Correct User Role')
            next()
        } catch (error) {
            res.send({error:error.message})
        }
    }

}

module.exports = authorizationMiddleware