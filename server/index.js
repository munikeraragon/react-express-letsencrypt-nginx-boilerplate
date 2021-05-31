import express from 'express';
import https from 'https';
import fs from 'fs';

const app = express()
const port = 5000

var credentials = {
    key: fs.readFileSync(
        '/etc/letsencrypt/live/example.com/privkey.pem',
        'utf8'
    ),
    cert: fs.readFileSync(
        '/etc/letsencrypt/live/example.com/cert.pem',
        'utf8'
    ),
    ca: fs.readFileSync(
        '/etc/letsencrypt/live/example.com/fullchain.pem',
        'utf8'
    ),
};

app.get('/', (req, res) => {
    res.send('https server')
})

https.createServer(credentials, app).listen(port, () => {
    console.log(`https server listening at http://localhost:${port}`);
});