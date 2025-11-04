const app = require("./app");
const sequelize = require("./config/db.config");
const blog_dummy = require("./db/blog.seed");
const db = require("./models");
// const USER = require("./models/user.model");
// const AUTHOR = require("./models/author.model");
// const BLOG = require("./models/blog.model");
// const CATEGORY = require("./models/category.model");


require('dotenv').config()


let port =  process.env.PORT || 8000;

// IIFE ()
if (process.env.NODE_ENV =="development"){
    
    // blog_dummy();

    (async () => {
      try {
        await sequelize.authenticate();
        console.log("database connected successfully... ");
        await db.users.sync({ alter:false });
        console.log("user table created... ");
        await db.authors.sync({ alter:false });
        console.log("author table created... ");
        await db.categories.sync({ alter:false });
        console.log("category table created... ");
        await db.blogs.sync({ force:false });
        console.log("blog table created... ");
      } catch (error) {
        console.log(`database connection error  ${error.message} `);
      }
    })();
}
else{
    (async () => {
      try {
        await sequelize.authenticate();
        console.log("database connected successfully... ");
        await USER.sync({ force: false });
        console.log("user table created... ");
      } catch (error) {
        console.log(`database connection error  ${error.message} `);
      }
    })();
}


// starting server 
app.listen(port ,function(error){

    error 
    ? 
    console.log(`error while starting server ${error}`)
    :
    console.log(`server started successfully at ${port}`)
    
})