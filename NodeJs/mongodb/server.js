const express = require('express');
const server = express(); // To Excutable Function
const dbConnection = require('./config/databaseConnection.js');

// parse requests of content-type - application/json
server.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));


server.get('', (request, response) => {
    response.send('Server is working fine !');
})

server.get('/categories', async(request, response) => {

    const db = await dbConnection();
    const  insertData = await db.collection('categories').insertOne({
        name : 'Mens'
    });



    // const data = categories;

    // if (data.length > 0) {
        const results = {
            status: true,
            message: 'Record Fetch Successfully !!',
            data: insertData
        }

        response.send(results);
    // } else {
    //     const results = {
    //         status: false,
    //         message: 'No Record Found !!',
    //         data: []
    //     }
    //     response.send(results);
    // }
})

server.get('*', (request, response) => {
    response.send('Page Not Found !');
})

server.listen(5000, () => {
    console.log('Server is working fine !')
});