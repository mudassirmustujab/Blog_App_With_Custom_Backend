const sequelize = require("../config/db.cjs")
const { DataTypes } = require('sequelize');

const USER = sequelize.define('user_data', {
  id: {
    type: DataTypes.INTEGER,
    unique:true,
    primaryKey:true,
    autoIncrement: true
},
  username:{
    type: DataTypes.CHAR
    , 
    defaultValue:false
  },
  email: {
    type: DataTypes.CHAR,
    unique: true
  },
  password: DataTypes.STRING,
  role:{
    type: DataTypes.ENUM("guest","admin","editor"),
    defaultValue: "guest"
  }
});


module.exports = USER