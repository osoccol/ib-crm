exports.logout = (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'LOGOUT' }));
};