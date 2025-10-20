const USER = require("../models/model.cjs");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  let saltRounds = 10;
  let { username, email,  password } = await req.body;

  try {
    console.log(
      username,
      email,
      password,
      "Data from register - Frontend"
    ); // Testing

    let hashedPassword = await bcrypt.hash(password, saltRounds);

    let [user, created] = await USER.findOrCreate({
      where: {
        email,
      },
      defaults: {
        username,
        password: hashedPassword,
      },
    });
    console.log("after find or create");

    if (created) {
      res.status(200).send(`User is created in DB`, user);
      res.send('on register page')
     
    } else {
      res.status(200).send(`User already exists`, user);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = register;
