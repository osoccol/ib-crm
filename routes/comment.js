const express = require('express');
const router = express.Router();

const commentController = require('../controllers/comment');

router.get('', commentController.getAllComments);             // READ  => req GET
router.get('/:id', commentController.getCommentById);         // READ  => req GET
router.post('', commentController.createComment);             // CREATE  =>  HTTP, requete POST
router.put('/:id', commentController.updateComment);          // UPDATE  =>  req PUT, PATCH
router.delete('/:id', commentController.deleteCommentById);   // DELETE => req DELETE

module.exports = router;


// CREATE  =>  HTTP, requete POST

// READ  => req GET

// UPDATE  =>  req PUT, PATCH

// DELETE => req DELETE