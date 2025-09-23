const app = require("./app.cjs")
const port = 8000;
const sequelize = require('./config//db.cjs');
const USER = require('./models/model.cjs');

(async () => {
   console.log("script started")
  try {


    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: true });
    
    // Code here
    
    const jane = await USER.create({id:"123524", USERname: 'Jane', email:"abc@xyz.com", password:"123" });
    // Jane exists in the database now!
    console.log('Instance of user ---> ',jane instanceof USER); // true
    console.log('Email of user --->',jane.email); // "Jane"

} catch (error) {
    console.error('Unable to connect to the database:', error);
}


})();

app.listen(port, ()=>{
    try {
        console.log("Server ran successfully at port:",port)
    } catch (error) {
        console.log(error, "Error in port listener: Port", port)
    }
})
