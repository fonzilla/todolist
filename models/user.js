'use strict';

const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(pass) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(pass, salt);
        this.setDataValue('password', hash);
      }
    }
  });

  user.prototype.auth = function(pass) {
    return bcrypt.compareSync(pass, this.password)
  };
  
  return user;
};
