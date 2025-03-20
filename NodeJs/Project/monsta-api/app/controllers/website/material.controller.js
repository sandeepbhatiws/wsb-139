const materialModal = require("../../modals/material");

// For View 
exports.index = async(request,response) => {

    var condition = {
        deleted_at : null,
        status : true
    }

    if(request.body.name != '' && request.body.name != undefined){
        // var nameRegex = new RegExp("^" + request.body.name);
        var nameRegex = new RegExp(request.body.name,"i");
        condition.name = nameRegex;
    }
    
    await materialModal.find(condition)
    .select('name status order')
    .sort(
        {
            order : 'asc',
            _id : 'desc',
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