const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const USER=sequelize.define("User", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique:true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "guest",
  },
  profile_pic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email_verified:{
    type: DataTypes.BOOLEAN,
    allowNull:false,
    defaultValue:false
    
  }
});

module.exports = USER
