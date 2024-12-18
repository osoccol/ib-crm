const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('', userController.getAllUsers);             // READ  => req GET
router.get('/:id', userController.getUserById);         // READ  => req GET
router.post('', userController.createUser);             // CREATE  =>  HTTP, requete POST
router.put('/:id', userController.updateUser);          // UPDATE  =>  req PUT, PATCH
router.delete('/:id', userController.deleteUserById);   // DELETE => req DELETE

module.exports = router;