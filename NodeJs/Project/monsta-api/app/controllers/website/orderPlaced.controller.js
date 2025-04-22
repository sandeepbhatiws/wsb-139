const orderModal = require("../../modals/order");
var jwt = require('jsonwebtoken');
const saltRounds = 10;
var secretkey = '1234567890';
const Razorpay = require('razorpay');

var instance = new Razorpay({
    key_id: 'rzp_test_bQlyV7ucVx6ogo',
    key_secret: 'yvogXUWbQBb9Fc35v9SV4loV',
});

// For Add Data
exports.orderPlaced = async (request, response) => {

    var token = request.headers.authorization.split(' ');
    var verifyToken = await jwt.verify(token[1], secretkey);

    const saveData = request.body;

    const totalOrders = await orderModal.find().countDocuments();

    saveData.order_number = 'MONSTA_'+(totalOrders+1);

    saveData.user_id = verifyToken.data._id;
    saveData.order_id = 22;

    const data = new orderModal(saveData)


    // order_id
    // user_id

    await data.save()
    .then( async(result) => {

        var  orderPayment =  await instance.orders.create({
            "amount": request.body.net_amount * 100,
            "currency": "INR",
            "receipt": result._id,
            "partial_payment": false,
        })


        await orderModal.updateOne({ _id: result._id }, {
            $set: {
                order_id : orderPayment.id
            }
        })

        const resp = {
            status: true,
            message: 'Order Placed successfully !!',
            data: result,
        }
        response.send(resp);
    })
    .catch((error) => {
        var errormessages = [];

        console.log(error);

        for (var value in error.errors) {
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status: false,
            message: 'Something went wrong !!',
            data: '',
            error: errormessages
        }
        response.send(resp);
    })
}

// For Update
exports.updateStatus = async (request, response) => {

    const saveData = request.body;

    console.log(saveData)

    await orderModal.updateOne(
        {
            order_id: request.params.order_id
        },
        {
            $set: saveData
        }
    ).then((result) => {
        var resp = {
            status: true,
            message: 'Record update successfully !!',
            data: result
        }

        response.send(resp);

    }).catch((error) => {
        var errormessages = [];

        for (var value in error.errors) {
            console.log(value);
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status: false,
            message: 'Something went wrong !!',
            data: '',
            error: errormessages
        }
        response.send(resp);
    })
}