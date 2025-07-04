import { createServer } from 'node:http';

const server = createServer((request, response) => {
    console.log("Request received.")
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hello, this is my first server with Node.js!</h1>');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
