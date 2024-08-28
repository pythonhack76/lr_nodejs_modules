const http = require('http');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Test di Node\n');
});


server.listen(3000, () => {
    console.log('Il Server sta correndo su http.//localhost:3000/');
}); 