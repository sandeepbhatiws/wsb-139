const parentCategoryModal = require("../../modals/parentCategory");
const slugify = require('slugify');

// For Add Data
exports.create = async (request, response) => {

    const saveData = {
        order: request.body.order ? request.body.order : 0
    };

    if(request.body.name){
        saveData.name = request.body.name;

        var slug = slugify(request.body.name, {
            lower: true,
            strict: true,
        })
        saveData.slug = await generateUniqueSlug(parentCategoryModal,slug);
    }

    if(request.file){
        saveData.image = request.file.filename;
    }

    const data = new parentCategoryModal(saveData)

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

const generateUniqueSlug = async (Model, baseSlug) => {
    let slug = baseSlug;
    let count = 0;
  
    // Loop to find unique slug
    while (await Model.findOne({ slug })) {
      count++;
      slug = `${baseSlug}-${count}`;
    }
  
    return slug;
};

// For View 
exports.index = async (request, response) => {

    var condition = {
        deleted_at: null
    }

    if (request.body.name != '' && request.body.name != undefined) {
        // var nameRegex = new RegExp("^" + request.body.name);
        var nameRegex = new RegExp(request.body.name, "i");
        condition.name = nameRegex;
    }

    if(request.body.page){
        var page = request.body.page;
    } else {
        var page = 1;
    }

    if(request.body.limit){
        var limit = request.body.limit;
    } else {
        var limit = 5;
    }

    var skip = (page-1) * limit;

    var total_records = await parentCategoryModal.find(condition).countDocuments();

    await parentCategoryModal.find(condition)
        .select('name image status sub_category_id order')
        .populate({
            path : 'sub_category_id',
            select : 'name status'
        })
        .sort(
            {
                _id: 'desc'
            }
        )
        .limit(limit)
        .skip(skip)
        .then((result) => {
            if (result.length > 0) {
                const resp = {
                    status: true,
                    message: 'Record found successfully !!',
                    total_pages : Math.ceil(total_records/limit),
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
    await parentCategoryModal.findById(request.params.id)
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

    if(request.file){
        condition.image = request.file.filename;
    }

    if (request.body.order) {
        condition.order = request.body.order;
    }

    await parentCategoryModal.updateOne(
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

    console.log(request.body.ids)

    await parentCategoryModal.updateMany(
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
    await parentCategoryModal.updateMany(
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