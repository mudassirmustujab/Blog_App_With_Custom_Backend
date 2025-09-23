


 const authentication = async (req, res, next)=>{

    try {
        
        console.log('Request Headers', req.headers.authorization)
        next()
    } catch (error) {
        throw error
    }
 }

module.exports = authentication