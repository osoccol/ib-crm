const Comment = require('../models/comment');

exports.getAllComments = (req, res, next) => {
    Comment.find()
        .then((comments) => {
            res.status(200).json(comments);
        })
        .catch((error) => {
            res.status(400).json({ error: error })
        });
}

exports.getAllCommentsFromEmail = (req, res, next) => {
    Comment.find({ email: req.params.email })
        .then((comments) => {
            res.status(200).json(comments);
        })
        .catch((error) => {
            res.status(400).json({ error: error })
        });
}


exports.getCommentById = (req, res, next) => {
    Comment.findById(req.params.id)
        .then((comment) => {
            res.status(200).json(comment);
        })
        .catch((error) => {
            res.status(400).json({ error: error })
        });
}

exports.deleteCommentById = (req, res, next) => {
    Comment.findByIdAndDelete(req.params.id)
        .then((success) => {
            res.status(200).json(success);
        })
        .catch((error) => {
            res.status(400).json({ error: error })
        });
}

exports.createComment = (req, res, next) => {
    const comment = new Comment({
        name: req.body.name,
        email: req.body.email,
        movie_id: req.body.movie_id,
        date: req.body.date,
        text: req.body.text
    });
    comment.save()
        .then((success) => {
            res.status(200).json(success);
        })
        .catch((error) => {
            res.status(400).json({ error: error })
        });
}

exports.updateComment = (req, res, next) => {
    const comment = new Comment({
        name: req.body.comment.name,
        email: req.body.comment.email,
        movie_id: req.body.comment.movie_id,
        date: req.body.comment.date,
        text: req.body.comment.text
    });
    Comment.updateOne({ _id: req.body.comment._id }, comment)
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