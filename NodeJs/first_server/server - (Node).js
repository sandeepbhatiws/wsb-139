const http = require('http');
const { categories, products, productDetails } = require('./apiData');

// http.createServer(() => {

// })
// .listen('8001');


const server = http.createServer((request,response) => {

    if(request.url == '/'){
        response.end('<h1>Server is working Fine.</h1>');
    } else if(request.url == '/add-category' && request.method == 'GET'){
        const data = {
            status : true,  // true or false
            message : 'Message Goes Here..',
            data : 'response'
        }

        response.end(JSON.stringify(data));

    } else if(request.url == '/categories' && request.method == 'GET'){
        const data = categories;

        if(data.length > 0){
            const results = {
                status : true,
                message : 'Record Fetch Successfully !!',
                data : data
            }

            response.end(JSON.stringify(results));
        } else {
            const results = {
                status : false,
                message : 'No Record Found !!',
                data : []
            }
            response.end(JSON.stringify(results));
        }
    } else if(request.url == '/products' && request.method == 'GET'){
        const data = products;

        if(data.length > 0){
            const results = {
                status : true,
                message : 'Record Fetch Successfully !!',
                data : data
            }

            response.end(JSON.stringify(results));
        } else {
            const results = {
                status : false,
                message : 'No Record Found !!',
                data : []
            }
            response.end(JSON.stringify(results));
        }
    } else if(request.url == '/product-details' && request.method == 'GET'){
        const data = productDetails;

        if(data){
            const results = {
                status : true,
                message : 'Record Fetch Successfully !!',
                data : data
            }

            response.end(JSON.stringify(results));
        } else {
            const results = {
                status : false,
                message : 'No Record Found !!',
                data : null
            }
            response.end(JSON.stringify(results));
        }
    } else {
        response.end('<h1>Page Not Found.</h1>');
    }
});

server.listen('8001',() => {
    console.log('Server is working Fine.');
});