const express = require('express');
const app = express();

// Middleware to parse text and JSON bodies
app.use(express.raw({type: '*/*'}));
app.use(express.json());

// Echo endpoint - responds with the same data it receives
app.post('/echo', (req, res) => {
    // Capture the content type of the incoming request
    const contentType = req.headers['content-type'] || 'text/plain';
    // Set the response content type to match the request's content type
    res.set('Content-Type', contentType);
    // send back the received data as the response
    res.send(req.body);
});

// Default route for GET requests to the root URL
app.get('/', (req, res) => {
    res.send('echo server is running. Send POST requests to /echo.');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Echo server listening on port ${PORT}`);   
});

module.exports = app; // for testing