
console.log('ello')

 const authentication = async (req, res, next)=>{
    
    try {
        
        console.log('Request Headers', req.headers)
        next()
    } catch (error) {
        throw error
    }
 }

module.exports = authentication