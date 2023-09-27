const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('users',userSchema);
module.exports = UserModel;