const app = require('./app');
const http = require('http').Server(app);;
const port = 3000;

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = http.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
        default:
            throw error;
    }
};

http.on('error', errorHandler);

http.listen(port, () => {
    const address = http.address();
    const bind = (typeof address === 'string') ? 'pipe ' + address : 'port ' + port;
    console.log(`Listening on ${bind} !`);
});