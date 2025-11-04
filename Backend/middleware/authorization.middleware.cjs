

const authorizationMiddleware = (allowedRoles)=>{


    return (req, res, next)=>{
        try {
            
            if (!allowedRoles.includes(req.role)) {
                return res.status(403).send('Incorrect user role')
            }

            next()
        } catch (error) {
            res.status(403).send({error:error.message})
        }
    }

}

module.exports = authorizationMiddleware