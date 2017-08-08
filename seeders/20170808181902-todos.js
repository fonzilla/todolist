'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('todo', [{
        todolistitem: 'Learn Sequelize',
        complete: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
    }, {
        todolistitem: 'Learn React',
        complete: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
    }, {
        todolistitem: 'Learn HTML',
        complete: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
    }], {})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
