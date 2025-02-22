const express = require('express');
const server = express();
const { categories, products, productDetails } = require('./apiData');

// parse requests of content-type - application/json
server.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));


server.get('', (request, response) => {
    response.send('Server is working fine !');
})

server.get('/categories', (request, response) => {
    const data = categories;

    if (data.length > 0) {
        const results = {
            status: true,
            message: 'Record Fetch Successfully !!',
            data: data
        }

        response.send(results);
    } else {
        const results = {
            status: false,
            message: 'No Record Found !!',
            data: []
        }
        response.send(results);
    }
})

server.get('/products', (request, response) => {
    const data = products;

    if (data.length > 0) {
        const results = {
            status: true,
            message: 'Record Fetch Successfully !!',
            data: data
        }

        response.send(results);
    } else {
        const results = {
            status: false,
            message: 'No Record Found !!',
            data: []
        }
        response.send(results);
    }
})

server.post('/product-details', (request, response) => {

    // console.log(request.query);

    console.log(request.body);

    const data = productDetails;

    if (data) {
        const results = {
            status: true,
            message: 'Record Fetch Successfully !!',
            data: data,
            info : request.body
        }

        response.send(results);
    } else {
        const results = {
            status: false,
            message: 'No Record Found !!',
            data: null
        }
        response.send(results);
    }
})

server.get('*', (request, response) => {
    response.send('Page Not Found !');
})

server.listen(5000, () => {
    console.log('Server is working fine !')
});