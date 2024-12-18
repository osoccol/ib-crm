const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;


// CREATE  =>  HTTP, requete POST

// READ  => req GET

// UPDATE  =>  req PUT, PATCH

// DELETE => req DELETE