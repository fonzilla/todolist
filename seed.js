const models = require('./models');

models.todo.bulkCreate([{
    todoitem: 'Learn Sequelize',
    complete: true,
    createdAt: Date.now(),
    updatedAt: Date.now()
}, {
    todoitem: 'Learn React',
    complete: false,
    createdAt: Date.now(),
    updatedAt: Date.now()
}, {
    todoitem: 'Learn HTML',
    complete: true,
    createdAt: Date.now(),
    updatedAt: Date.now()
}])
.then(result => {
  console.log(result);
})
