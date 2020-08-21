const express = require("express");
const redis = require('redis');
const process = require('process');

const app = express();

const client = redis.createClient({
    // usually its an address, but in docker its a server in a container
    host: 'redis-server',
    // default port
    port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send("No of visits : " + visits);
        client.set('visits', parseInt(visits) + 1);
    })
});

// for testing automatic container restarts
app.get('/crash', (req, res) => {
    // on purpose crash
    // 0 is an exit status code - but everything is OK
    // if any number other than 0 - something crashed/error
    process.exit(0);
});

app.listen(8080, () => {
    console.log("Listening on PORT:8080");
});