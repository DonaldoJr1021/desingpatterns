const mongodb = require('mongoose');
const schema = mongodb.Schema;

const UserSchema = new schema({
    name: {type: String},
    email: {type: String},
    telephone: {type: String},
    address: {type: String},
    city: {type: String},
    neighborhood: {type: String}
});

const user = mongodb.model('User', UserSchema);
module.exports = user;