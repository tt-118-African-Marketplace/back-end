const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/usersRouter.js');
const itemsRouter = require('../items/itemsRouter.js')

module.exports = server => {
    server.use('/auth', authRouter);
    server.use('/users', usersRouter);
    server.use('/items', itemsRouter);
};