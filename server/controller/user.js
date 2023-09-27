const UserModel = require('../models/userSchema');

const getUsers = (req, res) => {
    UserModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
};

const addUser = (req, res) => {
    UserModel.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        image: req.file.filename
    })
        .then(users => {
            console.log(users);
            res.json(users)
        })
        .catch(err => res.json(err))
};

const updateUser = (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    }).then(user => res.json(user))
        .catch(err => res.json(err))
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
}


module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}