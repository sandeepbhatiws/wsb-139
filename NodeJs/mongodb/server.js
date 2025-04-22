const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const server = express(); // To Excutable Function
const dbConnection = require('./config/databaseConnection.js');

// parse requests of content-type - application/json
server.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

server.use(bodyParser.json());

server.get('', (request, response) => {
    response.send('Server is working fine !');
})

server.post('/categories/add', async(request, response) => {

    const db = await dbConnection();
    const  insertData = await db.collection('categories').insertOne({
        name : request.body.name
    });

    const results = {
        status: true,
        message: 'Record Fetch Successfully !!',
        data: insertData
    }

    response.send(results);
})

server.get('/categories', async(request, response) => {

    const db = await dbConnection();
    const categoryData = await db.collection('categories').find().toArray();

    if (categoryData.length > 0) {
        const results = {
            status: true,
            message: 'Record Fetch Successfully !!',
            data: categoryData
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

server.get('/categories/details', async(request, response) => {

    var id = new mongodb.ObjectId(request.query.id)


    const db = await dbConnection();
    const categoryData = await db.collection('categories').findOne(id);

    if (categoryData) {
        const results = {
            status: true,
            message: 'Record Fetch Successfully !!',
            data: categoryData
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

server.put('/categories/update/:id', async(request, response) => {

    const db = await dbConnection();
    const  updateData = await db.collection('categories').updateOne({
        _id : new mongodb.ObjectId(request.params.id)
    },{
        $set : {
            name : request.body.name
        }
    });

    const results = {
        status: true,
        message: 'Record Updated Successfully !!',
        data: updateData
    }

    response.send(results);
})

server.delete('/categories/delete/:id?', async(request, response) => {

    const db = await dbConnection();
    const  deleteData = await db.collection('categories').deleteOne({
        _id : new mongodb.ObjectId(request.params.id)
    });

    const results = {
        status: true,
        message: 'Record Deleted Successfully !!',
        data: ''
    }

    response.send(results);
})

server.get('*', (request, response) => {
    response.send('Page Not Found !');
})

server.listen(5000, () => {
    console.log('Server is working fine !')
});