const parentCategoryModal = require("../../modals/parentCategory");
const subCategoryModal = require("../../modals/subCategory");

// For Parent Categories 
exports.parentCategories = async (request, response) => {

    const addCondition = [
        {
            deleted_at : null,
        }
    ];
    
    const orCondition = [];

    if (request.body.active_status != '' && request.body.active_status != undefined) {
        orCondition.push({ status : request.body.active_status});
    }
    
    if (request.body.id && request.body.id !== '') {
        orCondition.push({ _id: request.body.id });
    }
    
    if(addCondition.length > 0){
        var filter = { $and : addCondition }
    } else {
        var filter = {}
    }
    
    if(orCondition.length > 0){
        filter.$or = orCondition ;
    }

    console.log(filter);

    await parentCategoryModal.find(filter)
    .select('name image status order')
    .sort(
        {
            _id: 'desc'
        }
    )
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

// For Add Data
exports.create = async (request, response) => {

    const saveData = {
        order: request.body.order ? request.body.order : 0
    };

    if(request.body.parent_category_id){
        saveData.parent_category_id = request.body.parent_category_id;
    }

    if(request.body.name){
        saveData.name = request.body.name;
    }

    if(request.file){
        saveData.image = request.file.filename;
    }

    const data = new subCategoryModal(saveData)

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

    if (request.body.name != '' && request.body.name != undefined) {
        var nameRegex = new RegExp(request.body.name, "i");
        condition.name = nameRegex;
    }

    if (request.body.parent_category_id != '' && request.body.parent_category_id != undefined) {
        condition.parent_category_id = request.body.parent_category_id;
    }

    await subCategoryModal.find(condition)
        .select('name parent_category_id image status order')
        .sort(
            {
                _id: 'desc'
            }
        )
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
    await subCategoryModal.findById(request.params.id)
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

    var condition = {};

    if (request.body.name) {
        condition.name = request.body.name;
    }

    if (request.body.parent_category_id) {
        condition.parent_category_id = request.body.parent_category_id;
    }

    if(request.file){
        condition.image = request.file.filename;
    }

    if (request.body.order) {
        condition.order = request.body.order;
    }

    await subCategoryModal.updateOne(
        {
            _id: request.params.id
        },
        {
            $set: condition
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

    await subCategoryModal.updateMany(
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
    await subCategoryModal.updateMany(
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