const { Sequelize, DataTypes } = require('sequelize');
const {DB_NAME, DB_USERNAME, DB_DIALECT}= process.env



const sequelize = new Sequelize( DB_NAME, DB_USERNAME, '', {
  host: 'localhost',
  dialect: DB_DIALECT /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

(async () => {
       
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully in authorModel.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
)()


const AuthorUSER = sequelize.define('AuthorUser',
    {
        id:{
            primaryKey:true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        publications: {
            type:DataTypes.NUMBER
            , allowNull:false
        },
        qualifications: {
            type:DataTypes.STRING
            , allowNull:false
        },
        user_id:{
            type:DataTypes.UUID,
            unique:true
        }


    })

module.exports = AuthorUSER