const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');

const app = express();

// Passby CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const username = 'veingamedev';
const password = 'dGA6G3mBYLM2chZa';

const dbConnect = `mongodb+srv://${username}:${password}@cluster0.a1qcj.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set('strictQuery', true);
mongoose.connect(dbConnect, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Success MONGODB');
    })
    .catch((error) => {
        console.log('Unable to connect MONGODB');
        console.error(error);
    });

app.use(bodyParser.json());

app.use('/api/user', userRoutes);
app.use('/api/comment', commentRoutes);

app.use('', (req, res) => {
    if (req.url === '/hello') {
        // Répondre avec 'Hello World'
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World');
    } else if (req.url === '/json') {
        // Répondre avec 'Hello World'
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'JSON response' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

module.exports = app;