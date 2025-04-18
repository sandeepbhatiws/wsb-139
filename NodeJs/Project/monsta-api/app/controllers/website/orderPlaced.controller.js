const orderModal = require("../../modals/order");

// For Add Data
exports.orderPlaced = async (request, response) => {

    const saveData = request.body;

    const data = new orderModal(saveData)

    await data.save()
    .then((result) => {
        const resp = {
            status: true,
            message: 'Order Placed successfully !!',
            data: result,
        }
        response.send(resp);
    })
    .catch((error) => {
        var errormessages = [];

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

    await orderModal.updateOne(
        {
            _id: request.params.id
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