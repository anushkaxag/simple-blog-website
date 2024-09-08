const express = require('express');
const bodyParser = require('body-parser');
//To generate a new ID for every post
const { randomBytes } = require('crypto');
const cors = require('cors');
//Creating a new app
const app = express();
app.use(bodyParser.json());
app.use(cors());

//To store every post created
const posts = {};

//Two different routes - to get post and to post
//Associating routes with app

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});

//App listens to a specific port
//Starts a server that listens for incoming HTTP requests on port 4000
// 4000 port is the number where server will be running
app.listen(4000, () => {
    console.log('Listening on 4000');
});