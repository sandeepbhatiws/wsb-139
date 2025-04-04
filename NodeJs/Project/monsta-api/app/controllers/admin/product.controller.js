const productModal = require("../../modals/product");

// For Add Data
exports.create = async (request, response) => {

    const saveData = request.body;

    if(request.files.images){
        var images = [];
        request.files.images.forEach((v,i) => {
            images.push(v.filename);
        });
        saveData.multiple_images = images;
    }

    if(request.files.image){
        saveData.image = request.files.image[0].filename;
    }

    const data = new productModal(saveData)

    await data.save()
    .then((result) => {
        const resp = {
            status: true,
            message: 'Record inserted successfully !!',
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

// For View 
exports.index = async (request, response) => {

    var condition = {
        deleted_at: null
    }

    // if (request.body.name != '' && request.body.name != undefined) {
    //     // var nameRegex = new RegExp("^" + request.body.name);
    //     var nameRegex = new RegExp(request.body.name, "i");
    //     condition.name = nameRegex;
    // }

    if(request.body.parent_category_id){
        condition.parent_category_id = {
            $in: request.body.parent_category_id
        }
    }

    if(request.body.sorting == 1){
        var sort = {
            name : 'asc'
        }
    } else if(request.body.sorting == 2){
        var sort = {
            name : 'desc'
        }
    } else {
        var sort = {
            order : 'asc',
            _id: 'desc',
        }
    }

    var limit = 5;
    var page = 1;
    var skip = 0;

    if(request.body.limit == 1 || request.body.limit > 1){
        limit = request.body.limit;
    }

    if(request.body.page == 1 || request.body.page > 1){
        page = request.body.page;
        skip = (page - 1) * limit; 
    }


    await productModal.find(condition)
        .select('name parent_category_id sub_category_id image price discount_price status order')
        .populate([{
            path : 'parent_category_id',
            select : 'name'
        },{
            path : 'sub_category_id',
            select : 'name'
        }])
        .limit(limit).skip(skip)
        .sort(sort)
        .then((result) => {
            if (result.length > 0) {
                const resp = {
                    status: true,
                    message: 'Record found successfully !!',
                    base_url : `${request.protocol}://${request.get('host')}/uploads/categories/`,
                    data: result,
                }
                response.send(resp);
            } else {
                const resp = {
                    status: false,
                    message: 'No record found !!',
                    data: [],
                }
                response.send(resp);
            }
        })
        .catch((error) => {
            const resp = {
                status: false,
                message: 'Something went wrong !!',
                data: '',
                error: error
            }
            response.send(resp);
        })
}

// For Details
exports.details = async (request, response) => {
    await productModal.findById(request.params.id)
        .then((result) => {
            if (result != null) {
                const resp = {
                    status: true,
                    base_url : `${request.protocol}://${request.get('host')}/uploads/categories/`,
                    message: 'Record found successfully !!',
                    data: result,
                }
                response.send(resp);
            } else {
                const resp = {
                    status: false,
                    message: 'No record found !!',
                    data: [],
                }
                response.send(resp);
            }
        })
        .catch((error) => {
            const resp = {
                status: false,
                message: 'Something went wrong !!',
                data: '',
                error: error
            }
            response.send(resp);
        })
}

// For Update
exports.update = async (request, response) => {

    const saveData = request.body;

    if(request.files.images.length > 0){
        var images = [];
        request.files.images.forEach((v,i) => {
            images.push(v.filename);
        });
        saveData.multiple_images = images;
    }

    if(request.files.image[0]){
        saveData.image = request.files.image[0].filename;
    }

    await productModal.updateOne(
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

// For Delete
exports.destroy = async (request, response) => {

    await productModal.updateMany(
        {
            _id: {
                $in: request.body.ids
            }
        },
        {
            $set: {
                deleted_at: Date.now(),
            }
        }
    ).then((result) => {
        var resp = {
            status: true,
            message: 'Record deleted successfully !!',
            data: result
        }

        response.send(resp);

    }).catch((error) => {

        console.log(error);
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

// For Change Status
exports.changeStatus = async (request, response) => {
    await productModal.updateMany(
        { _id: { $in: request.body.ids } },
        [
            { 
                $set: { 
                    status: { 
                        $not: "$status" 
                    } 
                } 
            }
        ]
    ).then((result) => {
        var resp = {
            status: true,
            message: 'Change status successfully !!',
            data: result
        }

        response.send(resp);

    }).catch((error) => {
        var errormessages = [];

        console.log(error);

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