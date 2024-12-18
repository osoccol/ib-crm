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

exports.createUser = (req, res, next) => {    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    user.save()
        .then((success) => {
            res.status(200).json(success);
        })
        .catch((error) => {
            res.status(400).json({ error: error })
        });
}

exports.updateUser = (req, res, next) => {
    // console.log(req);
    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    user._id = req.body._id;
    
    User.updateOne({ _id: req.body._id }, user)
        .then((success) => {
            res.status(200).json(success);
        })
        .catch((error) => {
            res.status(400).json({ error: error })
        });
}