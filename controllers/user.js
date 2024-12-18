const User = require('../models/user');

exports.getAllUsers = (req, res, next) => {
    User.find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((error) => {
            res.status(400).json({ error: error })
        });
}

exports.getUserById = (req, res, next) => {
    User.findById(req.params.id)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((error) => {
            res.status(400).json({ error: error })
        });
}

exports.deleteUserById = (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then((success) => {
            res.status(200).json(success);
        })
        .catch((error) => {
            res.status(400).json({ error: error })
        });
}
// CREATE  =>  HTTP, requete POST

// READ  => req GET

// UPDATE  =>  req PUT, PATCH

// DELETE => req DELETE