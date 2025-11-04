const { default: AuthorUSER } = require('../models/authorModel.cjs')
const USER = require('../models/model.cjs')

const getAuthor = async (req, res)=>{

    try {

        const {user_id} = req.body
        if (!user_id) {
            return res.status(400).send({error: 'user id needed' })
        }

       const getAuthorReq = await AuthorUSER.findOne({where:{user_id}})

       if (!getAuthorReq) {
        return res.status(400).send({error: 'author not found'})
       }    
        res.send({message:'Success with getting author',author: getAuthorReq})
    } catch (error) {
        res.send({error: error.message})
    }
}


const getAuthors = async (req, res) => {
     try {

        if (!req.body) {
            return res.status(400).send('Response body not found')
        }
        res.send('Success with getting author')
    } catch (error) {
        res.send('error', error.message)
    }

}

const postAuthor = async (req, res) => {
    try {

        if(!req.body) {
             return res.status(400).send('Response body not found')
        }

        const {user_id, qualifications, publications} = req.body

        if(!user_id && !qualifications && !publications){
            return res.status(201).send('Response body not found of three')
        }

       const postAuthorReq = await AuthorUSER.create({publications, qualifications, user_id} )
        if (!postAuthorReq) {
            return  res.status(400).send('Author not created')
        }
        res.send({message: 'Author created successfully', author: postAuthorReq})
    } catch (error) {
        res.send({error:error.message})
    }
}

const patchAuthor = async (req, res) => {
    try {
        res.send('Success with getting author')
    } catch (error) {
        res.send('error', error.message)
    }
}

const deleteAuthor = async (req, res) => {
    try {
        res.send('Success with getting author')
    } catch (error) {
        res.send('error', error.message)
    }
}