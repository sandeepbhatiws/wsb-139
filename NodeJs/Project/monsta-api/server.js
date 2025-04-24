const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const { PORT, DB_URI } = process.env;

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

server.use('/uploads/categories', express.static('./uploads/categories'));

// Admin URLS
require('./app/routes/admin/default.routes.js')(server);
require('./app/routes/admin/material.routes.js')(server);
require('./app/routes/admin/color.routes.js')(server);
require('./app/routes/admin/parentCategory.routes.js')(server);
require('./app/routes/admin/subCategory.routes.js')(server);
require('./app/routes/admin/product.routes.js')(server);

// Website URLS
require('./app/routes/website/material.routes.js')(server);
require('./app/routes/website/user.routes.js')(server);
require('./app/routes/website/verifyToken.routes.js')(server);
require('./app/routes/website/dashboard.routes.js')(server);
require('./app/routes/website/orderPlaced.routes.js')(server);

server.get('*', (request, response) => {
    response.send('404 Page not found !!');
});

mongoose.connect(DB_URI)
.then(() => {
    server.listen(PORT);
    console.log('Connected!')
})
.catch((error) => {
    console.log(error);
    console.log('Not Connected!');
});
