const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    text: { type: String, required: true },
    movie_id: { type: String, required: true },
    date: { type: Date, required: false }
});

module.exports = mongoose.model('comment', commentSchema);