'use strict';
module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define('todo', {
    todoitem: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return todo;
};
