const userRouter = require('express').Router();
const { users } = require('../data/users.js');

userRouter.get('/users', (req, res) => {
  res.send(users)
});

userRouter.get('/users/:id', (req, res) => {
  const { id } = req.params;

  const user = users.filter(item => item._id === id)[0];
  if (user) {
    res.send(user)
  } else {
    res.status(404);
    res.send( { "message": "Нет пользователя с таким id" } );
  }
});

module.exports = userRouter;