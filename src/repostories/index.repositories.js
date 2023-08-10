const user_model = require('../model/user.model');
let response = {
    error: null,
    data: null,
    code: null,
    message: null,
    type: null
};

/**
 * 
 * @returns users list
 * developer: Donaldo Parra
 * date: 07-02-2023
 */
// List all users
const listUsers = async () => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Search for all users
        const result = await user_model.find({});

        if(result && result.length > 0){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Get Data Success";
            response.type = "OK";
        }else if(result.length == 0){
            response.error = false;
            response.data = [];
            response.code = 200;
            response.message = "No Hay Users";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = [];
            response.code = 301;
            response.message = "Error ocurred to list all users";
            response.type = "Error";
        }

    } catch (error) {
        response.error = true;
        response.data = [];
        response.code = 500;
        response.message = error.message;
        response.type = "Error";
    }

    return response;
};

/**
 * 
 * @param {user} 
 * @returns response
 * development: Donaldo Parra
 * date: 07-02-2023
 */
// create new user
const createUser = async (user) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        // Create a instance of the user model
        const userToSave = new user_model(user);

        // Save the user
        const result = await userToSave.save();
        if(result){
            response.error = false;
            response.data = result;
            response.code = 200;
            response.message = "Data Created Success";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error ocurred to create new user";
            response.type = "Error";
        }

    } catch (error) {
        response.error = true;
        response.data = "";
        response.code = 500;
        response.message = error.message;
        response.type = "Error";
    }

    return response;
};

/**
 * 
 * @param {idUser, user} 
 * @returns response
 * Developer: Donaldo Parra
 * date: 09-02-2023
 */
// Update user data
const updateUser = async (idUser, user) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const userToUpdate = await user_model.findByIdAndUpdate(idUser, user);
        
        if(userToUpdate){
            response.error = false;
            response.data = userToUpdate;
            response.code = 200;
            response.message = "Data update Success";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error occured to update user";
            response.type = "Error";
        }
    } catch (error) {
        response.error = true;
        response.data = "";
        response.code = 500;
        response.message = error.message;
        response.type = "Error";
    }

    return response;
};

/**
 * 
 * @param {idUser} 
 * @returns response
 * Developer: Donaldo Parra
 * date: 09-02-2023
 */
// Delete user data
const deleteUser = async (idUser) => {
    response.error = null;
    response.data = null;
    response.code = null;
    response.message = null;
    response.type = null;

    try {
        const userDeleted = await user_model.findByIdAndDelete(idUser);
        
        if(userDeleted){
            response.error = false;
            response.data = userDeleted;
            response.code = 200;
            response.message = "Success data deleted";
            response.type = "OK";
        }else{
            response.error = true;
            response.data = "";
            response.code = 500;
            response.message = "Error occured to delete user";
            response.type = "Error";
        }
    } catch (error) {
        response.error = true;
        response.data = "";
        response.code = 500;
        response.message = error.message;
        response.type = "Error";
    }

    return response;
};

module.exports = {
    listUsers,
    createUser,
    updateUser,
    deleteUser
}