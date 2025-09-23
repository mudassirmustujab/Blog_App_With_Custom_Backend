const app = require("./app");
const sequelize = require("./config/db.config");
const USER = require("./models/user.model");
require('dotenv').config()


let port = 8000 || process.env.PORT;

// IIFE ()
if (process.env.NODE_ENV =="development"){
    
    (async () => {
      try {
        await sequelize.authenticate();
        console.log("database connected successfully... ");
        await USER.sync({ force: true });
        console.log("user table created... ");
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