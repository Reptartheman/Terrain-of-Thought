const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {

//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }I added this back in if we want to add password hashing- technically not required as far as i can tell!
 } 


User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6],
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );
  
  module.exports = User;