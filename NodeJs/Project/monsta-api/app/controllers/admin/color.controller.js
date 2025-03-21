const colorModal = require("../../modals/color");

// For Add Data
exports.create = async(request,response) => {

    const data = new colorModal({
        name : request.body.name,
        code : request.body.code,
        order : request.body.order ? request.body.order : 0
    })

    await data.save()
    .then((result) => {
        const resp = {
            status : true,
            message : 'Record inserted successfully !!',
            data : result,
        }
        response.send(resp);
    })
    .catch((error) => {
        var errormessages = [];

        for(var value in error.errors){
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : errormessages
        }
        response.send(resp);
    })
}

// For View 
exports.index = async(request,response) => {

    var condition = {
        deleted_at : null
    }

    if(request.body.name != '' && request.body.name != undefined){
        var nameRegex = new RegExp(request.body.name,"i");
        condition.name = nameRegex;
    }

    if(request.body.code != '' && request.body.code != undefined){
        var codeRegex = new RegExp(request.body.code,"i");
        condition.code = codeRegex;
    }
    
    await colorModal.find(condition)
    .select('name code status order')
    .sort(
        {
             _id : 'desc'
        }
    )
    .then((result) => {
        if(result.length > 0){
            const resp = {
                status : true,
                message : 'Record found successfully !!',
                data : result,
            }
            response.send(resp);
        } else {
            const resp = {
                status : false,
                message : 'No record found !!',
                data : [],
            }
            response.send(resp);
        }
    })
    .catch((error) => {
        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : error
        }
        response.send(resp);
    })
}

// For Details
exports.details = async(request,response) => {
    await colorModal.findById(request.params.id)
    .then((result) => {
        if(result != null){
            const resp = {
                status : true,
                message : 'Record found successfully !!',
                data : result,
            }
            response.send(resp);
        } else {
            const resp = {
                status : false,
                message : 'No record found !!',
                data : [],
            }
            response.send(resp);
        }
    })
    .catch((error) => {
        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : error
        }
        response.send(resp);
    })
}

// For Update
exports.update = async(request,response) => {

    var condition = {};

    if(request.body.name){
        condition.name = request.body.name;
    }

    if(request.body.code){
        condition.code = request.body.code;
    }

    if(request.body.order){
        condition.order = request.body.order;
    }

    await colorModal.updateOne(
        {
            _id : request.params.id
        },
        {
            $set : condition
        }
    ).then((result) =>{
        var resp = {
            status : true,
            message : 'Record update successfully !!',
            data : result
        }

        response.send(resp);

    }).catch((error) => {
        var errormessages = [];

        for(var value in error.errors){
            console.log(value);
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : errormessages
        }
        response.send(resp);
    })
}

// For Delete
exports.destroy = async(request,response) => {
    await colorModal.updateMany(
        {
            _id : {
                $in : request.body.ids
            } 
        },
        {
            $set : {
                deleted_at : Date.now(),
            }
        }
    ).then((result) =>{
        var resp = {
            status : true,
            message : 'Record deleted successfully !!',
            data : result
        }

        response.send(resp);

    }).catch((error) => {

        console.log(error);
        var errormessages = [];

        for(var value in error.errors){
            console.log(value);
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : errormessages
        }
        response.send(resp);
    })
}

// For Change Status
exports.changeStatus = async(request,response) => {
    await colorModal.updateOne(
        {
            _id : request.params.id
        },
        {
            $set : {
                deleted_at : Date.now(),
            }
        }
    ).then((result) =>{
        var resp = {
            status : true,
            message : 'Record deleted successfully !!',
            data : result
        }

        response.send(resp);

    }).catch((error) => {
        var errormessages = [];

        for(var value in error.errors){
            console.log(value);
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : errormessages
        }
        response.send(resp);
    })
}