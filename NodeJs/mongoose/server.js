const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();  // Executable Function

// parse requests of content-type - application/json
server.use(express.json());

server.use(bodyParser.json());

server.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

server.get('/', (request, response) => {
    response.send('Server is working fine !!');
});

require('./app/routes/admin/default.routes.js')(server);
require('./app/routes/admin/brands.routes.js')(server);

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_new')
.then(() => {
    server.listen('5000');
    console.log('Connected!')
})
.catch(() => {
    console.log('Not Connected!');
});
