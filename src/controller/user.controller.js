// call the handlers to get the results
const handerls = require('../handlers/user.handler');

// list all users
const userHandler = handerls().get;

// create user
const createUserHandler = handerls().post;

// update user
const updateUserHandler = handerls().put;

// delete user
const deleteUserHandler = handerls().delete;

module.exports = {
    userHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler
}

