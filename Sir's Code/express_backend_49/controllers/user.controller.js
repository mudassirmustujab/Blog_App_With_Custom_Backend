const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require('fs')
const path = require('path')
const USER = require("../models/user.model");
const transporter  = require("../config/smtp.config");
const { root_dir } = require("../utils/root_dir.util");

let register_file_path = path.join(root_dir,'pages','mail','register.html')

let email_reg_temp_html  =fs.readFileSync(register_file_path,'utf-8')



const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //data validation
    // check request contain require data or not
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ msg: "please provide complete data to proceed..." });
    } else if (!validator.isAlphanumeric(username)) {
      return res
        .status(400)
        .json({ msg: "username must conatin only letter and digits " });
    } else if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "email must be in valid format " });
    } else if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ msg: "please enter strong password ..." });
    }

    let email_exist = await USER.findOne({ where: { email } });

    console.log("email exist ", email_exist);

    if (email_exist) {
      return res.status(400).json({ msg: "email already exist ..." });
    }

    const salt = await bcrypt.genSalt(10);

    const encrpted_password = await bcrypt.hash(password, salt);
    // data validation
    const user = await USER.create({
      username,
      email,
      password: encrpted_password,
    });
    //update v1
    
     const info = await transporter.sendMail({
       from: '"Blog App 49 Team" <fwebdev2021@gmail.com>', // sender address
       to: email, // list of receivers
       subject: "Registered Successfully", // Subject line
      //  text: "", // plain text body
       html: email_reg_temp_html.replace('{{username}}', user.username)
                                .replace('{{email}}',user.email)
                                .replace('{{role}}',user.role)
      
      })


     console.log("Message sent: %s", info.messageId);
     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // 
    res.status(200).json({ msg: "user created successfully " });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "please provide complete data to proceed..." });
    }

    const user = await USER.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ msg: "email not exist " });
    }
    // console.log("user password",password);
    // console.log("db password",user.password);
    let is_matched = await bcrypt.compare(password, user.password);

    // console.log(is_matched);

    if (!is_matched) {
      return res.status(400).json({ msg: "incorrect password " });
    }

    const token = jwt.sign({ id: user.id }, "kgjfkljgfkljgklfjgkldfj", {
      expiresIn: "5m",
    });

    res.status(200).json({
      msg: "user loggedin",
      data: { email: user.email, username: user.username, user_token: token },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getUser = async(req,res)=>{
  try {

      const data= await USER.findAll({attributes: ['username', 'email','role']});
      // console.log("user data :" ,dataValues);
      res.status(200).json({msg:"success",data})
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
}

module.exports = { register, signIn ,getUser};
